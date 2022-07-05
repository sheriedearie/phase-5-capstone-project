class ProductSerializer < ActiveModel::Serializer
    attributes :user, :price, :name, :photo, :id, :buyer_purchases
    # has_many :buyers, serializer: UserSerializer
    has_many :reviews
    include Rails.application.routes.url_helpers

    def photo
        return nil unless object.photo.attached?
        object.photo.blob.attributes.slice('filename', 'byte_size').merge(url: rails_blob_path(object.photo, only_path: true)).tap { |attrs| attrs['name'] = attrs.delete('filename') }
      end
      
    # def photo
    #   Rails.application.routes.url_helpers.url_for(photo) if photo.attached? 
    # end
end