class Api::UsersController < ApplicationController
  skip_before_action :authorize, only: [:create]

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def show
    render json: current_user
  end

  def showcart
    render json: current_user.cart_products
  end

  # def index
  #   users = User.all
  #   render json: users,  status: 200
  # end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation, :avatar, :name, :email)
  end

end
