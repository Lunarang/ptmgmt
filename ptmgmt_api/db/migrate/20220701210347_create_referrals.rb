class CreateReferrals < ActiveRecord::Migration[6.1]
  def change
    create_table :referrals do |t|
      t.date :sent
      t.string :facility
      t.text :reason
      t.belongs_to :patient, index: true, foreign_key: true
      
      t.timestamps
    end
  end
end
