Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "hello_world", to: 'application#hello_world'

  get "send_gifts", to: 'sending_gifts#send_gifts'

  post "callback", to: 'webhook#callback'

end
