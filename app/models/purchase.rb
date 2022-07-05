class Purchase < ApplicationRecord
    has_one :review
    #has_many :products
    belongs_to :user
    has_many :purchased_products
    has_many :products, through: :purchased_products
end