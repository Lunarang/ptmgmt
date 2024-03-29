Rails.application.routes.draw do
  devise_for :admins, controllers: { omniauth_callbacks: "users/omniauth_callbacks" }
  resources :attorneys
  resources :referrals
  resources :imagings
  resources :treatments
  resources :patients
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
