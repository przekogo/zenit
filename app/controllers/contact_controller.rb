class ContactController < ApplicationController
  def index ; end

  def mail
    ContactMailer.contact_email(params).deliver_now
    respond_to do |format|
      format.js
    end
  end
end
