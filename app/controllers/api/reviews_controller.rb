class Api::ReviewsController < ApplicationController
    def index
        render json: Review.all
    end

    def create
        reviews = current_user.reviews.create!(review_params)
        render json: reviews, status: :created
    end

    def destroy
        reviews = Review.find_by!(id: params[:id])
        reviews.delete
    end

private

    def review_params
        params.permit(:rating, :comment)
    end
end