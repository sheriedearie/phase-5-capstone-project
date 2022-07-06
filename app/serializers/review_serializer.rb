class ReviewSerializer < ActiveModel::Serializer
    attributes :id, :rating, :comment, :buyer, :purchase
    # belongs_to :product, serializer: ProductSerializer
    def buyer
        "#{self.object.buyer.name}"
        # might be an issue with line 5
    end
    def product
        "#{self.object.product.name}"
    end
end