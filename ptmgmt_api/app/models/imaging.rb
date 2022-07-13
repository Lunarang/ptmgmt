class Imaging < ApplicationRecord
    belongs_to :patient
    validates_presence_of :sent, :facility, :areas
end
