class CreateTreatments < ActiveRecord::Migration[6.1]
  def change
    create_table :treatments do |t|
      t.date :start
      t.string :frequency
      t.string :therapy
      t.belongs_to :patient, index: true, foreign_key: true

      t.timestamps
    end
  end
end
