class Product < ApplicationRecord
    has_many :purchases
    has_many :reviews, through: :purchases
    has_many :buyers, through: :purchases, source: :user
    belongs_to :user
    has_one_attached :photo, dependent: :destroy
end
