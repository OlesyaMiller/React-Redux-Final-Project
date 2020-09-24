class ListingsController < ApplicationController
    def index
        listings = Listing.all
        render json: listings, include: [:reviews, :location]
    end
end
