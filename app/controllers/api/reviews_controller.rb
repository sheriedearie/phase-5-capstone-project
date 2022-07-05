class Api::ReviewsController < ApplicationController
    def index
        render json: Review.all
    end

    def create
        byebug
        reviews = Review.create!(rating: params[:rating], comment: params[:comment], user_id: params[:user_id], purchase_id: params[:purchase_id])
        render json: reviews, status: :created
    end

    def destroy
        reviews = Review.find_by!(id: params[:id])
        reviews.delete
    end

    def update
        review = Review.find_by!(id: params[:id])
        review.update!(rating: params[:rating], comment: params[:comment])
        render json: review
      end

private

    def review_params
        params.permit(:rating, :comment, :user_id, :purchase_id)
    end
end