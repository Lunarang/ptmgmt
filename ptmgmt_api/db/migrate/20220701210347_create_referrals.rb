class CreateReferrals < ActiveRecord::Migration[6.1]
  def change
    create_table :referrals do |t|
      t.date :sent
      t.string :facility
      t.text :reason

      t.timestamps
    end
  end
end
