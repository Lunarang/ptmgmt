class Patient < ApplicationRecord
    belongs_to :attorney
    has_many :treatments, :imagings, :referrals
end
