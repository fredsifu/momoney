json.extract! address, :id, :street_number, :route, :other_line, :unit_number, :city, :state_province_region, :zip_postal_code, :country_code, :longitude, :latitude, :addressable_id, :addressable_type, :created_at, :updated_at
json.url address_url(address, format: :json)
