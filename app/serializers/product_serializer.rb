class ProductSerializer < ActiveModel::Serializer
    attributes :id, :image_url, :user, :price, :name, :photo
    include Rails.application.routes.url_helpers

    def photo
        return nil unless object.photo.attached?
        object.photo.blob.attributes.slice('filename', 'byte_size').merge(url: rails_blob_path(object.photo, only_path: true)).tap { |attrs| attrs['name'] = attrs.delete('filename') }
      end
end