class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.string :image_url
      t.integer :price
      t.text :review

      t.timestamps
    end
  end
end
