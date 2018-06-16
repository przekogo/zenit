Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'home#index'

  get 'buildings', to: 'buildings#index'
  get 'contact', to: 'contact#index'

  post 'contact/mail', to: 'contact#mail', format: 'js'
end
