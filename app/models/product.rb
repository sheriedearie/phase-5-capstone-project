class Product < ApplicationRecord
    has_many :reviews - 👍
    has_many :buyers, through: :reviews 👍
    has_many :buyers, through: :purchases 👍
    has_many :purchases 👍
    # has_one_attached :avatar, dependent: :destroy

end
