class GalleriesController < ApplicationController
  def fetch
    respond_to do |format|
      # TODO move this to aws, mocked for now
      format.html {
        render partial: 'galleries/show',
        locals: {
          building: params[:building],
          images: {
            lotus: ['lotus-1.jpg'],
            lily: ['lily-1.jpg'],
            orchid: ['orchid-1.jpg', 'orchid-2.jpg', 'orchid-3.jpg', 'orchid-4.jpg', 'orchid-5.jpg', 'orchid-6.jpg', 'orchid-7.jpg'],
            rose: ['rose-1.jpg', 'rose-2.jpg', 'rose-3.jpg', 'rose-4.jpg'],
            iris: ['iris-1.jpg']
          }[params[:building].to_sym]
        }
      }
    end
  end
end
