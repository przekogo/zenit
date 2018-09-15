ActiveAdmin.register AdminUser do
  index do
    selectable_column
    id_column
    column :email
    column :created_at
    column :updated_at
    actions
  end

  show do
    attributes_table do
      row :email
      row :created_at
      row :updated_at
    end
  end
end

ActiveAdmin.setup do |config|
  config.comments = false
end
