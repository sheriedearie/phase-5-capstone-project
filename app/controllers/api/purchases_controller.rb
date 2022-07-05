class Api::PurchasesController < ApplicationController

    def index
        render json: Purchase.all
    end

    def create
        # purchase = Purchase.new(purchase_params)
        # current_user.cart_products.each do |product|
        # purchase = Purchase.create(purchase_params)
            current_user.cart_products.each do |product|
                product.purchases.create!(product_id: product.product_id)
        # current_user.cart_products = cart
        # cart.create(purchase_params)
        # product.cart_product_id = nil
        # purchase.save
    # end
end
        CartProduct.destroy(session[:cart_product_id])
        session[:cart_product_id] = nil
        render json: purchase
    end

    private
    def purchase_params
        params.permit(:product_id, :user_id)
    end
end
