class Api::PurchasesController < ApplicationController

    def index
        render json: Purchase.all
    end

    def show
        render json: current_user.purchases.uniq
    end

    def create
        current_user.cart_products.each do |cartProd| 
            Purchase.create!(user_id: params[:user_id], product_id: cartProd.product_id)
            cartProd.destroy
        end
    end
    
    private
    # def purchase_params
    #     params.permit(:user_id)
    # end
end
