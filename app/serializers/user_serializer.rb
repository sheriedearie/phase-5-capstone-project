class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :image_url, :products, :name
  has_many :products, serializer: ProductSerializer
  # has_many :purhcased_products, serializer: ProductSerializer
end
