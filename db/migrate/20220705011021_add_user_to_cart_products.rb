class AddUserToCartProducts < ActiveRecord::Migration[6.1]
  def change
    add_reference :cart_products, :user, null: false, foreign_key: true
  end
end
