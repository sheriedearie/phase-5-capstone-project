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
peter.avatar.attach(io: File.open("app/assests/peter.webp"), filename: 'peter.png')
stephen = User.create(name: "Stephen", username: "stephen123", password: "password", email:"stephen@email.com")
stephen.avatar.attach(io: File.open("app/assests/Man.png"), filename: 'Man.png')
sheridan = User.create(name: "Sheridan", username: "sheridan95", password: "12345", email:"sheridanmaustad@gmail.com")
sheridan.avatar.attach(io: File.open("app/assests/girl.jpg"), filename: 'girl.jpg')


xbox = Product.create(user: peter, name: "Xbox", price: 300)
xbox.photo.attach(io: File.open("app/assests/xbox.jpg"), filename: 'xbox.jpg')
notebook = Product.create(user: sheridan, name: "Notebook", price: 10)
notebook.photo.attach(io: File.open("app/assests/notebook.jpg"), filename: 'notebook.jpg')
gopro = Product.create(user: stephen, name: "Gopro", price: 350)
gopro.photo.attach(io: File.open("app/assests/gopro.jpg"), filename: 'gopro.jpg')

purchase1 = Purchase.create(product:xbox, user:sheridan)
purchase2 = Purchase.create(product:notebook, user:stephen)
purchase3 = Purchase.create(product:gopro, user:peter)

CartProduct.create(user_id: 3, product_id: 1)
CartProduct.create(user_id: 2, product_id: 2)
CartProduct.create(user_id: 1, product_id: 3)

Review.create(purchase: purchase1, rating: 5, comment:"This product is amazing, 10/10!", user_id: 1, product_id: 1)
Review.create(purchase: purchase2, rating: 4, comment:"I love how easy it is to write in this!", user_id: 2, product_id: 2)
Review.create(purchase: purchase3, rating: 3, comment:"The quality of these videos is immaculate.", user_id: 3, product_id: 3)