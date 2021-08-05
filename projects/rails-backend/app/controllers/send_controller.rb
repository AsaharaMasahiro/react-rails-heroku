class SendController < ActionController::API
require 'line/bot' 
  private
  def client
    @client ||= Line::Bot::Client.new { |config|
        config.channel_secret = ENV["LINE_CHANNEL_SECRET"]
        config.channel_token = ENV["LINE_CHANNEL_TOKEN"]
    }
  end
  public
  def line_send
    user_list = User.all
    p user_list
    message={
        type: 'text',
        text: 'この度は、おすすめのクーポンをお渡しいたします。次回ご来店時にぜひご利用ください。'
    }
    user_list.each do |user_id|
        p user_id[:line_id]
        response = client.push_message(user_id[:line_id], message)
    end
  end
end

