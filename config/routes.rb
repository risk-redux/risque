Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  root 'static#index'

  get '/', to: 'static#index', as: 'index'
  get '/about', to: 'static#about', as: 'about'
end
