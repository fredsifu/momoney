# Whitelist locales available for the application
I18n.available_locales = [:en, :fr]

# Where the I18n library should search for translation files
I18n.available_locales.each do |locale|
  I18n.load_path += Dir[Rails.root.join('config', 'locales', locale.to_s, '*.{rb,yml}')]
end

# Set default locale to something other than :en
I18n.default_locale = :fr
