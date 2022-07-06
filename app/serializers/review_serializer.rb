class ReviewSerializer < ActiveModel::Serializer
    attributes :id, :rating, :comment, :buyer, :purchase
    # belongs_to :product, serializer: ProductSerializer
    def buyer
        # change to buyer_name
        "#{self.object.user.name}"
    end
    def product     
        byebug
        "#{self.object.product.name}"
    end
end