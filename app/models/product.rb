class Product < ApplicationRecord
    has_many :users
    has_many :reviews, through: :users
    # has_one_attached :avatar, dependent: :destroy

end
