Chess::Application.routes.draw do
  
  resources :exercises

  resources :games

  root :to => 'games#index'

end
