class ContactMailer < ApplicationMailer
  default from: Rails.application.secrets.email

  def contact_email(params)
    @params = params
    reciepent = Rails.application.secrets.email
    mail(to: reciepent, subject: 'Kontakt przez stronę od ' + params[:name], from: params[:email])
  end
end
