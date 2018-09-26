class AddSpaceDetailsToBuildings < ActiveRecord::Migration[5.1]
  def change
    add_column :buildings, :space_details, :string
  end
end
