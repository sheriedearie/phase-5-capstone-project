class Purchase < ApplicationRecord
    has_many :reviews, class_name: "Product", foreign_key: :purchase_id 
end
