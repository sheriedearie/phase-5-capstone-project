class ReviewSerializer < ActiveModel::Serializer
    attributes :id, :rating, :comment, :buyer

    def buyer
        "#{self.object.buyer.name}"
    end
end