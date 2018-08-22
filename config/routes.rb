Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope "(:locale)", locale: /en|fr/ do
    root to: 'pages#index'
    get '/about', to: 'pages#about'
  end
end
