class ProductSerializer < ActiveModel::Serializer
    attributes :user, :price, :name, :photo, :id, :total_buyers_who_purchased 
    # has_many :buyers, serializer: UserSerializer
    # has_many :reviews
    include Rails.application.routes.url_helpers

    def photo
        return nil unless object.photo.attached?
        object.photo.blob.attributes.slice('filename', 'byte_size').merge(url: rails_blob_path(object.photo, only_path: true)).tap { |attrs| attrs['name'] = attrs.delete('filename') }
      end
      
    
end