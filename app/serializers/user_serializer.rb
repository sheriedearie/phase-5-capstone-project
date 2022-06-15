class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :image_url, :bio, :email, :name
  has_many :products, serializer: ProductSerializer
end
