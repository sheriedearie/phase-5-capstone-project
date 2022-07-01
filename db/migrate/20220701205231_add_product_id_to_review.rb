class AddProductIdToReview < ActiveRecord::Migration[6.1]
  def change
    add_reference :reviews, :product, null: false, foreign_key: true
  end
end
