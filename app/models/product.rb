class Product < ApplicationRecord
    # include Rails.application.routes.url_helpers

    has_many :purchases
    has_many :reviews, through: :purchases
    has_many :buyers, through: :purchases, source: :user
    belongs_to :user
    has_one_attached :photo, dependent: :destroy
    has_many :cart_products
    has_many :carts, through: :cart_products
end
