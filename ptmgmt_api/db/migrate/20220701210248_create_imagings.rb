class CreateImagings < ActiveRecord::Migration[6.1]
  def change
    create_table :imagings do |t|
      t.date :sent
      t.string :facility
      t.boolean :scheduled
      t.date :completed
      t.integer :attempts_to_receive
      t.date :received
      t.string :areas

      t.timestamps
    end
  end
end
