class Review < ApplicationRecord
    belongs_to :purchase
    # belongs_to :product
    # belongs_to :buyer, class_name: "User", foreign_key: :user_id
    delegate :user, :to => :purchase, :allow_nil => false
    delegate :product, :to => :purchase, :allow_nil => false
end
