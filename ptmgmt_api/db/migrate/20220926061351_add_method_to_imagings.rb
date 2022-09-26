class AddMethodToImagings < ActiveRecord::Migration[6.1]
  def change
    add_column :imagings, :method, :string
  end
end
