class Product < ApplicationRecord
    # include Rails.application.routes.url_helpers

    # has_many :purchased_products
    has_many :purchases
    has_many :buyers, through: :purchases, source: :user
    has_many :reviews, dependent: :destroy
    belongs_to :user
    has_one_attached :photo, dependent: :destroy
    has_many :cart_products

end