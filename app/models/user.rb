class User < ApplicationRecord
  has_many :purchased_products, class_name "Product"
  has_many :created_products, class_name "Product", foreign_key: :user_id
  # has_one_attached :avatar, dependent: :destroy

  has_secure_password

  validates :username, presence: true, uniqueness: true, length: {in: 3..20}
  validates :password, length: {in: 3..50}
  validates :email, presence: true, uniqueness: true, format: {with: /\A(?<username>[^@\s]+)@((?<domain_name>[-a-z0-9]+)\.(?<domain>[a-z]{2,}))\z/i}
end