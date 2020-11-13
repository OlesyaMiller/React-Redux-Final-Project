class ReviewsController < ApplicationController
    def index
        reviews = Review.all
        render json: reviews 
    end

    def create 
        review = Review.new(review_params)
        review.listing = Listing.find(params[:listingId])
        if review.save
            render json: review
        else
            render json: { message: review.errors }, status: 400
        end
    end

    def destroy 
        @review = Review.find_by(id: params[:id])
        if @review.destroy
            render status: 204
        else
            render json: { message: "Unsuccessful Delete" }, status: 400
        end
    end

    private 

    def review_params
        params.require(:review).permit(:content, :listing_id)
    end
end
