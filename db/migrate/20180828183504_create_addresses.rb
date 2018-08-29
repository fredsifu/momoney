class CreateAddresses < ActiveRecord::Migration[5.2]
  def change
    create_table :addresses do |t|
      t.string :street_number
      t.string :route
      t.string :other_line
      t.string :unit_number
      t.string :city
      t.string :state_province_region
      t.string :zip_postal_code
      t.string :country_code
      t.decimal :longitude, precision: 16, scale: 6
      t.decimal :latitude, precision: 16, scale: 6
      t.references :addressable, polymorphic: true, index: true

      t.timestamps
    end
  end
end
