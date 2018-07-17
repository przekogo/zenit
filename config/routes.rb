Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'home#index'

  get 'buildings', to: 'buildings#index'
  get 'buildings/lotus', to: 'buildings#lotus'
  get 'buildings/lily', to: 'buildings#lily'
  get 'buildings/orchid', to: 'buildings#orchid'
  get 'buildings/rose', to: 'buildings#rose'
  get 'buildings/iris', to: 'buildings#iris'
  get 'contact', to: 'contact#index'

  get 'curtain', to: 'home#curtain'

  post 'contact/mail', to: 'contact#mail', format: 'js'
end
