class HomeController < ApplicationController
	def index
    @news = News.all
  end

  def curtain ; end

  def timeline ; end
end
