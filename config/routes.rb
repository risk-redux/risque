Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  root to: 'static#index'
  get 'about', to: 'static#about', as: :about
  get 'index', to: 'static#index', as: :home

  # get 'threat_sources', to: 'threat_sources#index', as: :threat_sources

  # get 'impacts', to: 'impacts#index', as: :impacts

  # get 'likelihoods', to: 'likelihoods#index', as: :likelihoods

  # get 'vulnerabilities', to: 'vulnerabilities#index', as: :vulnerabilities

  # get 'threat_events', to: 'threat_events#index', as: :threat_events

  # get 'risk_objects', to: 'risk_objects#index', as: :risk_objects

  # get 'threat_oriented_risk_objects', to: 'threat_oriented_risk_objects#index', as: 'threat_oriented_risk_objects'
  # post 'threat_oriented_risk_objects', to: 'threat_oriented_risk_objects#create'
  # get 'threat_oriented_risk_objects/new', to: 'threat_oriented_risk_objects#new', as: :new_threat_oriented_risk_object
  # get 'threat_oriented_risk_objects/:id/edit', to: 'threat_oriented_risk_objects#edit', as: :edit_threat_oriented_risk_object
  # get 'threat_oriented_risk_objects/:id', to: 'threat_oriented_risk_objects#show', as: :threat_oriented_risk_object
  # patch'threat_oriented_risk_objects/:id', to: 'threat_oriented_risk_objects#update'
  # put'threat_oriented_risk_objects/:id', to: 'threat_oriented_risk_objects#update'
  # delete'threat_oriented_risk_objects/:id', to: 'threat_oriented_risk_objects#destroy'
end
