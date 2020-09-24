class Listing < ApplicationRecord
    has_many :reviews
    belongs_to :location
end
