class SpacesController < ApplicationController
def index
  @buildings = Building.includes(:spaces).order('spaces.floor')
end

  def fetch
    building = Building.where('name LIKE ?', "%#{params[:building].capitalize}").first
    respond_to do |format|
      format.html {
        render partial: 'spaces/show', locals: { building: building }
      }
    end
  end
end
