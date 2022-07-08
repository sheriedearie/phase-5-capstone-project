# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Product.delete_all
Purchase.delete_all
Review.delete_all
CartProduct.delete_all

peter = User.create(name: "Peter", username: "PeterPiper", password: "12345", email:"peter@email.com")
stephen = User.create(name: "Stephen", username: "stephen123", password: "password", email:"stephen@email.com")
sheridan = User.create(name: "Sheridan", username: "sheridan95", password: "12345", email:"sheridanmaustad@gmail.com")


xbox = Product.create(user: peter, name: "Xbox", price: 300)
notebook = Product.create(user: sheridan, name: "Notebook", price: 10)
gopro = Product.create(user: stephen, name: "Gopro", price: 350)

purchase1 = Purchase.create(user:sheridan)
purchase2 = Purchase.create(user:stephen)
purchase3 = Purchase.create(user:peter)

CartProduct.create(user_id: 3, product_id: 1)
CartProduct.create(user_id: 2, product_id: 2)
CartProduct.create(user_id: 1, product_id: 3)

# Review.create(purchase: purchase1, rating: 5, comment:"This product is amazing, 10/10!")
# Review.create(purchase: purchase2, rating: 4, comment:"I love how easy it is to write in this!")
# Review.create(purchase: purchase3, rating: 3, comment:"The quality of these videos is immaculate.")