class CreateTreatments < ActiveRecord::Migration[6.1]
  def change
    create_table :treatments do |t|
      t.date :start
      t.string :frequency
      t.string :therapy

      t.timestamps
    end
  end
end
