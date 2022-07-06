class Api::CartProductsController < ApplicationController
  
    def index
      render json: current_user.cart_products
    end
  
    def show
        render json: current_user.cart_products.find_by!(id: params[:product_id])
    end

    def create
        cartProd = current_user.cart_products.find_by(product_id: params[:product_id])
        if(cartProd)
            cartProd.quantity ||= 1;
            cartProd.quantity += 1;
            cartProd.save
        else
            params[:quantity] = 1;
            cartProd = CartProduct.create!(product_id: params[:product_id], user_id: params[:user_id], quantity: params[:quantity])
        end
        render json: current_user.cart_products, status: :created
    end
  
#     def update
#         @cart_product.update(cart_product_params)
#         render json: @cart_product, status :created
#     end
  
    def destroy
        cartProd = current_user.cart_products.find_by(product_id: params[:id])
        cartProd.destroy
        render json: { message: "Item successfully removed"}
    end
  
    private
    def cart_product_params
    params.permit(:product_id, :user_id, :quantity)
    end
end