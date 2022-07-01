class ReviewSerializer < ActiveModel::Serializer
    attributes :id, :rating, :comment, :buyer, :product
    # belongs_to :product, serializer: ProductSerializer
    def buyer
        "#{self.object.buyer.name}"
    end
    def product
        "#{self.object.product.name}"
    end
end