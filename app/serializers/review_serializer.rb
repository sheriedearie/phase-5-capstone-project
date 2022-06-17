class ReviewSerializer < ActiveModel::Serializer
    attributes :id, :purchase, :rating, :comment
end