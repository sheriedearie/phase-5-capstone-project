# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

peter = User.create(name: "Peter", username: "PeterPiper", password: "12345", email:"peter@email.com", image_url: "https://image.shutterstock.com/image-vector/man-character-face-avatar-glasses-260nw-562077406.jpg")
stephen = User.create(name: "Stephen", username: "stephen123", password: "password", email:"stephen@email.com", image_url: "https://www.pngkey.com/png/full/804-8049827_input-black-male-avatar.png")
sheridan = User.create(name: "Sheridan", username: "sheridan95", password: "12345", email:"sheridanmaustad@gmail.com", image_url: "https://i.pinimg.com/474x/0e/9c/eb/0e9ceb5002e527dd90b14be502ae91b7.jpg")

xbox = Product.create(image_url: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6428/6428324_sd.jpg", name: "Xbox", price: 300, review: "This product is amazing, 10/10!")
notebook = Product.create(image_url: "https://target.scene7.com/is/image/Target/GUEST_36a52bac-7d96-4175-9fe5-7ebc06f1e81f?wid=488&hei=488&fmt=pjpeg", name: "Notebook", price: 10, review: "I love how easy it is to write in this!")
gopro = Product.create(image_url: "https://cdn.mos.cms.futurecdn.net/3NwbszmHSVSwi2nfcVgUB6.jpg", name: "Gopro", price: 350, review: "The quality of these videos is immaculate.")

