class BuildingsController < ApplicationController
  def index ; end

  def lotus
    render 'building', locals: {building: 'Azure Lotus'}
  end

  def lily
    render 'building', locals: {building: 'Crystal Lily'}
  end

  def orchid
    render 'building', locals: {building: 'Golden Orchid'}
  end

  def rose
    render 'building', locals: {building: 'Crimson Rose'}
  end

  def iris
    render 'building', locals: {building: 'Lavender Iris'}
  end
end
