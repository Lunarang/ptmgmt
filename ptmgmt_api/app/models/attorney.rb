class Attorney < ApplicationRecord
    has_many :patients
    validates_presence_of :name, :address, :city, :state, :zip, :phone, :fax
    validates :name, :address, :phone, :fax, uniqueness: true
    validates :zip, length: { is: 5 }
    validates :state, length: { is: 2 }
end
