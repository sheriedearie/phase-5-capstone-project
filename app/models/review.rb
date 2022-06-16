class Review < ApplicationRecord
    belongs_to :products
    belongs_to :users
end
