class Patient < ApplicationRecord
    belongs_to :attorney
    has_many :treatments, dependent: :destroy
    has_many :imagings, dependent: :destroy
    has_many :referrals, dependent: :destroy
    validates_presence_of :first_name, :last_name, :dob, :sex, :dol, :initial, :email
    validates_associated :treatments, :imagings, :referrals
end
