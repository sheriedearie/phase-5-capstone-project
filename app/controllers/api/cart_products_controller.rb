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
            cartProd.quantity += 1;
        else
            cartProd = CartProduct.create!(product_id: params[:product_id], user_id: params[:user_id], quantity: params[:quantity])
        end
        # if current_user.cart_products.include? 
#           @cart_product = current_cart.cart_products.find_by(product_id: product.id)
#           @cart_product.quanity += 1
#         else
#           @cart_product = CartProduct.new
#           @cart_product.cart = current_cart
#           @cart_product.product = product
#         end
#         @cart_product.save
        render json: current_user.cart_products, status: :created
    end
  
#     def update
#         @cart_product.update(cart_product_params)
#         render json: @cart_product, status :created
#     end
  
#     def destroy
#         cart = Cart.find(session[:cart_id])
#         @cart_product.destroy
#         render json: { message: "Item successfully removed"}
#     end
  
#     def add_quantity
#       @cart_product = CartProducts.find(params[:id])
#       @cart_product.quantity += 1
#       @cart_product.save
#     end
  
#     def reduce_quantity
#       @cart_product = CartProduct.find(params[:id])
#       if @cart_product.quantity > 1
#         @cart_product.quantity -= 1
#       end
#       @line_item.save
#     end
  
    private
    # def find_cart_product
    # @cart_product = CartProduct.find(params[:id])
    # end

    def cart_product_params
    # params.permit(:product_id, :user_id, :cart_product)
    params.permit(:product_id, :user_id, :quantity)
    end
end