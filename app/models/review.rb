class Review < ApplicationRecord
    belongs_to :purchase
    delegate :user, :to => :purchase, :allow_nil => false
    delegate :product, :to => :purchase, :allow_nil => false
end
