Rails.application.routes.draw do
  resources :referrals
  resources :imagings
  resources :treatments
  resources :patients
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
