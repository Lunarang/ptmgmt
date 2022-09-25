class AddOmniauthToAdmins < ActiveRecord::Migration[6.1]
  def change
    add_column :admins, :provider, :string
    add_column :admins, :uid, :string
  end
end
