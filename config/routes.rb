Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'home#index'

  get 'buildings', to: 'buildings#index'
  get 'buildings/lotus', to: 'buildings#lotus'
  get 'buildings/lily', to: 'buildings#lily'
  get 'buildings/orchid', to: 'buildings#orchid'
  get 'buildings/rose', to: 'buildings#rose'
  get 'buildings/iris', to: 'buildings#iris'

  get 'timeline', to: 'home#timeline'

  get 'contact', to: 'menu#contact', format: 'html'
  get 'gallery', to: 'galleries#fetch', format: 'html'
  get 'space', to: 'spaces#fetch', format: 'html'

  get 'spaces', to: 'spaces#index'

  post 'contact/mail', to: 'contact#mail', format: 'js'
end
