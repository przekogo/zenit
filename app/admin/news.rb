ActiveAdmin.register News do

  index do
    selectable_column
    id_column
    column I18n.t('news.title'), :title
    column I18n.t('news.content'), :content
    actions
  end

  form do |f|
    f.inputs "Product Details" do
      f.input :title, label: I18n.t('news.title')
      f.input :content, label: I18n.t('news.content')
    end
    f.actions
  end

  show do
    attributes_table do
      row I18n.t('news.title') do |n|
        n.title
      end
      row I18n.t('news.content') do |n|
        n.content
      end
    end
  end

  permit_params :title, :content
end
