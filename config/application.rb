require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Zenit
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1

    ActionMailer::Base.smtp_settings = {
      address:        Rails.application.secrets.sendgrid[:address],
      domain:         Rails.application.secrets.domain_name,
      password:       Rails.application.secrets.sendgrid[:password],
      port:           Rails.application.secrets.sendgrid[:port],
      user_name:      Rails.application.secrets.sendgrid[:username],

      authentication: :plain,
      enable_starttls_auto: true,
    }

    config.action_mailer.default_url_options = { host: Rails.application.secrets.domain_name }
    config.i18n.default_locale = :pl
    config.assets.paths << "#{Rails.root}/app/assets/files"
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
  end
end
