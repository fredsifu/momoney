json.extract! user_profile, :id, :user_id, :firstname, :lastname, :birthdate, :phone, :SIN, :address_id, :created_at, :updated_at
json.url user_profile_url(user_profile, format: :json)
