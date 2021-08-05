class SendingGiftsController < ActionController::API
  require 'line/bot' 
  def send_gifts
    users = User.all
    message = {
      type: 'text',
      text: 'この度は、おすすめのクーポンをお渡しいたします。次回ご来店時にぜひご利用ください。'
    }
    users.each do |user|
      response = client.push_message(user[:line_id], message)
    end
  end

  private

  def client
    @client ||= Line::Bot::Client.new { |config|
      config.channel_secret = ENV["LINE_CHANNEL_SECRET"]
      config.channel_token = ENV["LINE_CHANNEL_TOKEN"]
    }
  end
end
