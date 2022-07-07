class ReviewSerializer < ActiveModel::Serializer
    attributes :id, :rating, :comment, :buyer, :purchase, :product_name
    # belongs_to :product, serializer: ProductSerializer
    def buyer
        # change to
        "#{self.object.user.name}"
    end
    def product_name     
        "#{self.object.product.name}"
    end
end