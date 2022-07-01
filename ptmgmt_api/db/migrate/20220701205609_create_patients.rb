class CreatePatients < ActiveRecord::Migration[6.1]
  def change
    create_table :patients do |t|
      t.string :name
      t.date :dob
      t.string :sex
      t.date :dol
      t.date :initial
      t.string :case_manager
      t.text :notes
      t.string :referred_by
      t.string :email
      t.belongs_to :attorney, index: true, foreign_key: true

      t.timestamps
    end
  end
end
