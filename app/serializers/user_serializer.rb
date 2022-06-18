class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :avatar, :name
  has_many :products, serializer: ProductSerializer
  # has_many :purhcased_products, serializer: ProductSerializer

  # def avatar
  #   return nil unless object.avatar.attached?
  #   # binding.pry
  #   object.avatar.blob.attributes.slice('filename', 'byte_size').merge(url: rails_blob_path(object.avatar, only_path: true)).tap { |attrs| attrs['name'] = attrs.delete('filename') }
  # end
end
