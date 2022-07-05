class Purchase < ApplicationRecord
    has_many :reviews 
    # has_many :products
    belongs_to :user
    belongs_to :product
end