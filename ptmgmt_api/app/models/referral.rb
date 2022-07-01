class Referral < ApplicationRecord
    belongs_to :patient
    validates_presence_of :patient, :sent, :facility
end
