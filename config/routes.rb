Rails.application.routes.draw do
  get "about", to: "static#about", as: :about
  root to: "static#index"
  get 'static/index'
  get 'static/about'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
