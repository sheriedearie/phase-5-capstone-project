class Purchase < ApplicationRecord
    has_many :reviews
    belongs_to :user
    belongs_to :product
end