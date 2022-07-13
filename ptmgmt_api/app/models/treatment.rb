class Treatment < ApplicationRecord
    belongs_to :patient
    validates_presence_of :start, :frequency, :therapy
end
