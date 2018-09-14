Rails.application.routes.draw do
  resources :borrower_profiles
  resources :employments
  resources :personal_loans
  scope '(:locale)', locale: /en|fr/ do

    devise_for :users

    root to: 'pages#index'

    get '/about', to: 'pages#about'
    get '/personal', to: 'pages#personal'
    post '/create_personal', to: 'pages#create_personal'
    get '/car', to: 'pages#car'
    get '/home', to: 'pages#home'

    resources :user_profiles
    resources :addresses

  end
end
