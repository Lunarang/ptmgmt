class CreateAttorneys < ActiveRecord::Migration[6.1]
  def change
    create_table :attorneys do |t|
      t.string :name
      t.string :address
      t.string :city
      t.string :state
      t.integer :zip
      t.string :phone
      t.string :fax

      t.timestamps
    end
  end
end
