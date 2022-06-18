class Api::ProductsController < ApplicationController
    # before_action :check_admin!, except: [:index, :show]
    skip_before_action :authorize, only: [:index]

    def index
        render json: current_user.products
    end

    def create
        product = current_user.create!(product_params)
          render json: product, status: :created
      end

private

    def product_params
    params.permit(:name, :user_id, :image_url, :price)
    end

    def check_admin!
        render json: { errors: ["Not authorized"]}, status: :unauthorized unless @current_user.admin?
    end
end
