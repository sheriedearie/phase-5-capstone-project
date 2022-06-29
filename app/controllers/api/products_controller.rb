class Api::ProductsController < ApplicationController
    # before_action :check_admin!, except: [:index, :show]
    # skip_before_action :authorize, only: [:index]

    def index
        render json: Product.all
    end

    def create
        product = current_user.products.create!(product_params)
          render json: product, status: :created
      end
    
    def destroy
        product = Product.find_by!(id: params[:id])
        product.delete
    end

private

    def product_params
        params.permit(:name, :user_id, :price, :photo)
        end

    # def check_admin!
    #     render json: { errors: ["Not authorized"]}, status: :unauthorized unless @current_user.admin?
    # end
end
