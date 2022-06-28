require "pry"

class ApplicationController < ActionController::API
  include ActionController::Cookies

  # include ActiveStorage::Blob::Analyzable
  
  rescue_from ActiveRecord::RecordInvalid, with: :not_processed

  rescue_from ActiveRecord::RecordNotFound, with: :not_found

  before_action :authorize

  private
  
  def current_user
    current_user ||= User.find(session[:user_id])
  end

  def authorize
    render json: { errors: ["Not authorized"] }, status: :unauthorized unless current_user
  end 

  def not_found(exception)
    render json: { errors: ["#{exception.model} not found"]}, status: :not_found
   end

  def not_processed(invalid)
    render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end

end
