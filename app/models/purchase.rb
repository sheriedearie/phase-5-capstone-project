class Purchase < ApplicationRecord
    has_many :reviews
    belongs_to :user
    # has_many :purchased_products
    # belongs_to :product
    belongs_to :product
end