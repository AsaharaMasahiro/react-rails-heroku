class WebhookController < ActionController::API
 require 'line/bot' 
  def client
    @client ||= Line::Bot::Client.new { |config|
      config.channel_secret = ENV["LINE_CHANNEL_SECRET"]
      config.channel_token = ENV["LINE_CHANNEL_TOKEN"]
    }
  end

  def callback

    body = request.body.read

    signature = request.env['HTTP_X_LINE_SIGNATURE']
    unless client.validate_signature(body, signature)
      head :bad_request
    end

    events = client.parse_events_from(body)

    events.each { |event|

      case event
      when Line::Bot::Event::Follow
        user_id = event['source']['userId']
        user = User.create(line_id: user_id)

      when Line::Bot::Event::Unfollow
        user_id = event['source']['userId']
        user = User.destroy_by(line_id: user_id)
      end
    }

    head :ok
  end
end