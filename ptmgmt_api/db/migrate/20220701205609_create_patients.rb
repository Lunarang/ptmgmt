class CreatePatients < ActiveRecord::Migration[6.1]
  def change
    create_table :patients do |t|
      t.string :name
      t.date :dob
      t.string :sex
      t.date :dol
      t.date :initial
      t.string :attorney
      t.text :notes
      t.string :referred_by
      t.string :email

      t.timestamps
    end
  end
end
