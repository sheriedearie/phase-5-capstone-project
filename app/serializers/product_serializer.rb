class ProductSerializer < ActiveModel::Serializer
    attributes :id, :image_url, :name, :price, :review
end