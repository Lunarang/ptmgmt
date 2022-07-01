class Attorney < ApplicationRecord
    has_many :patients
    validates :name, :address, :phone, :fax, presence: true, uniqueness: true
end
