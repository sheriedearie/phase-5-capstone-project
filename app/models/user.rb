class User < ApplicationRecord
  has_many :purchases
  has_many :purchased_products, through: :purchases, source: :product
  has_many :reviews, through: :purchases
  has_many :products
  has_one_attached :avatar, dependent: :destroy
  has_one :cart

  has_secure_password

  # scope :admin, -> {where(role: 0)}
  validates :username, presence: true, uniqueness: true, length: {in: 3..20}
  validates :password, length: {in: 3..50}
  validates :email, presence: true, uniqueness: true, format: {with: /\A(?<username>[^@\s]+)@((?<domain_name>[-a-z0-9]+)\.(?<domain>[a-z]{2,}))\z/i}
  # enum role: %i(admin)
end

# should cart be in the backend?
# do we store
# completed true?
# or reuse the same object. 

