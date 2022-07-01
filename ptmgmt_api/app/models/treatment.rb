class Treatment < ApplicationRecord
    belongs_to :patient
    validates_presence_of :patient, :start, :frequency, :therapy
end
