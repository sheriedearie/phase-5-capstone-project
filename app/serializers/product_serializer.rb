class ProductSerializer < ActiveModel::Serializer
    attributes :id, :image_url, :user, :price, :name, :photo
end