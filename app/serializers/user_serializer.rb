class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :avatar, :name, :reviews
  has_many :products, serializer: ProductSerializer
  has_many :purchased_products, serializer: ProductSerializer
  include Rails.application.routes.url_helpers

  # has_many :purhcased_products, serializer: ProductSerializer

  def avatar
    return nil unless object.avatar.attached?
    # binding.pry
    object.avatar.blob.attributes.slice('filename', 'byte_size').merge(url: rails_blob_path(object.avatar, only_path: true)).tap { |attrs| attrs['name'] = attrs.delete('filename') }
  end
  #  def avatar
  #     Rails.application.routes.url_helpers.url_for(avatar) if avatar.attached? 
  #   end
end
