# Address Model
class Address < ApplicationRecord
  belongs_to :addressable, polymorphic: true, optional: true

  validates :street_number, presence: true
  validates :route, presence: true, length: { maximum: 100 }
  validates :other_line, length: { maximum: 100 }, allow_blank: true
  validates :unit_number, length: { maximum: 50 }, allow_blank: true
  validates :city, presence: true
  validates :state_province_region, presence: true, length: { minimum: 2, maximum: 100 }
  validates :zip_postal_code, presence: true, length: { minimum: 2, maximum: 15 }
  validates :country_code, presence: true

  def country_name
    country = ISO3166::Country[country_code]
    country.translations[I18n.locale.to_s] || country.name if country.present?
  end

  def self.attributes_to_ignore_when_comparing
    %i[id created_at updated_at]
  end

  def identical?(other)
    attributes.except(*self.class.attributes_to_ignore_when_comparing.map(&:to_s)) ==
      other.attributes.except(*self.class.attributes_to_ignore_when_comparing.map(&:to_s))
  end
end
