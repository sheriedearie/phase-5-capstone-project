class ProductsController < ApplicationController

    def index
        render json: @current_user.products
    end

    def create
        product = User.find_by_id(session[:user_id]).products.create!(product_params)
          render json: product, status: :created
      end
private

    def product_params
    params.permit(:name, :user_id, :image_url, :price)
    end
end
