class CreatePurchasedProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :purchased_products do |t|
      t.references :product
      t.references :purchase

      t.timestamps
    end
  end
end
