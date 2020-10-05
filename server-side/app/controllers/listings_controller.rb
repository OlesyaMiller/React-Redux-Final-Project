class ListingsController < ApplicationController
    def index
        listings = Listing.all
        render json: listings, include: [:reviews, :location]
    end

    def create 
        listing = Listing.new(listing_params)
        if listing.save
            render json: listing
        else
            render json: { message: listing.errors }, status: 400
        end
    end
    
    private 

    def listing_params
        params.require(:listing).permit(:title, :description, :img_url, :pets_allowed, :air_conditioning, :beds, :baths, :bedrooms, :guests, :kitchen, :wifi, :location_id)
    end
end
