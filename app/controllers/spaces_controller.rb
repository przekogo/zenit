class SpacesController < ApplicationController
  def fetch
    respond_to do |format|
      format.html {
        render partial: 'spaces/show', locals: { building: params[:building] }
      }
    end
  end
end
