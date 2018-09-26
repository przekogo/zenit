ActiveAdmin.register Space do
  index do
    selectable_column
    id_column
    column :building
    column :floor
    column :available
    column :total
    actions
  end

  form do |f|
    f.inputs "Spaces" do
      f.input :building, as: :select, collection: Building.all.map{|b| [b.name, b.id]}
      f.input :floor
      f.input :available
      f.input :total
    end
    f.actions
  end

  show do
    attributes_table do
      row :building
      row :floor
      row :available
      row :total
    end
  end

  permit_params :building_id, :floor, :available, :total
end
