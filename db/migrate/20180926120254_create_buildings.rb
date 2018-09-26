class CreateBuildings < ActiveRecord::Migration[5.1]
  def change
    create_table :buildings do |t|
      t.string :name
    end

    create_table :spaces do |t|
      t.integer :floor
      t.integer :available
      t.integer :total
      t.integer :building_id
    end
  end
end
