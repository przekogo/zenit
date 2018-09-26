ActiveAdmin.register Building do
  index do
    selectable_column
    id_column
    column :name
    column :space_details
    actions
  end

  form do |f|
    f.inputs "Product Details" do
      f.input :name
      f.input :space_details
    end
    f.actions
  end

  show do
    attributes_table do
      row :name
      row :space_details
    end
  end

  permit_params :name, :space_details
end
