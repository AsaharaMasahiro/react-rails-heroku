Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "hello_world", to: 'application#hello_world'

  get "line_send", to: 'send#line_send'

  post "callback", to: 'webhook#callback'

end
