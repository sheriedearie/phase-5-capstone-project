require "pry"

class ApplicationController < ActionController::API
  include ActionController::Cookies
  
  rescue_from ActiveRecord::RecordInvalid, with: :not_processed

  rescue_from ActiveRecord::RecordNotFound, with: :not_found

  before_action :authorize
  # before_action :current_cart

  private
  
  def current_user
    current_user ||= User.find(session[:user_id])
  end

  def authorize
    render json: { errors: ["Not authorized"] }, status: :unauthorized unless current_user
  end 

  # def current_cart
  #   if session[:cart_id]
  #     cart = Cart.find_by(id: session[:cart_id], user: session[:user_id])
  #     if cart.present?
  #       @current_cart = cart
  #     else 
  #       session[:cart_id] = nil
  #     end
  #   end
  # end

  #   if session[:cart_id] == nil
  #     @current_cart = Cart.create
  #     session[:cart_id] = @current_cart.id
  # end

  def not_found(exception)
    binding.pry
    render json: { errors: ["#{exception.model} not found"]}, status: :not_found
   end

  def not_processed(invalid)
    render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end

end