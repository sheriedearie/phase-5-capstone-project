class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :rating
      t.text :comment
      t.string :username
      t.string :product

      t.timestamps
    end
  end
end
