class Api::PurchasesController < ApplicationController

    def index
        render json: Purchase.all
    end

    def show
        render json: current_user.purchases
    end

    def create
        # current_user.cart_products.each do |product|
        # purchase = Purchase.create(purchase_params)
        purchase = Purchase.create!(user_id: params[:user_id])
        current_user.cart_products.each do |cartProd|
            purchase.products << cartProd.product
            cartProd.destroy
        end
            #product.purchases.create!(product_id: product.product_id)

        # cart.create(purchase_params)
        # product.cart_product_id = nil
    # end
    end
    #     CartProduct.destroy(session[:cart_product_id])
    #     session[:cart_product_id] = nil
    #     render json: purchase
    # end

    private
    # def purchase_params
    #     params.permit(:user_id)
    # end
end
