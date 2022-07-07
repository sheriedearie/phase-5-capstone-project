class Api::ReviewsController < ApplicationController
    def index
        render json: current_user.reviews
    end

    def create
        # purchase = Purchase.find(params[:purchase_id])
        reviews = Review.create!(rating: params[:rating], comment: params[:comment], purchase_id: params[:purchase_id])#, user_id: params[:user_id])
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
        params.permit(:rating, :comment, :purchase_id)#, :user_id)
    end
end