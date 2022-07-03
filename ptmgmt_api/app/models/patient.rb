class Patient < ApplicationRecord
    belongs_to :attorney
    has_many :treatments, :imagings, :referrals
    validates_presence_of :attorney, :name, :dob, :sex, :dol, :initial, :email
    validates_associated :treatments, :imagings, :referrals
end
