Rails.application.routes.draw do
  scope '(:locale)', locale: /en|fr/ do

    devise_for :users

    root to: 'pages#index'

    get '/about', to: 'pages#about'

    resources :user_profiles
    resources :addresses

  end
end
