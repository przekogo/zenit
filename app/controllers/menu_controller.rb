class MenuController < ApplicationController
  def contact
    respond_to do |format|
      format.html {
        render partial: 'menu/contact'
      }
    end
  end
end
