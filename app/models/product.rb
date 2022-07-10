class Product < ApplicationRecord
    
    has_many :purchases
    has_many :buyers, through: :purchases, source: :user
    has_many :reviews, dependent: :destroy
    belongs_to :user
    has_one_attached :photo, dependent: :destroy
    has_many :cart_products

    def total_buyers_who_purchased    
        self.buyers.uniq.length
      end
end