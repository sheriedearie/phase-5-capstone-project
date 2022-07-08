Rails.application.routes.draw do
  namespace :api do
    post "/signup", to: "users#create"
    get "/me", to: "users#show"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
    post "/checkout", to: "purchases#create"
    get "/purchased_products", to: "purchases#show"
    # post '/presigned_url', to: 'direct_upload#create'

    resources :reviews
    resources :products
    resources :purchases
    resources :users, only: [:index, :show]
    resources :users do
      resources :cart_products, shallow: true
    end
  end
  # all other routes will be load our React application
  # this route definition matches:
  # - *path: all paths not matched by one of the routes defined above
  # - constraints:
  #   - !req.xhr?: it's not a XHR (fetch) request
  #   - req.format.html?: it's a request for a HTML document
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
