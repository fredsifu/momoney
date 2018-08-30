class CreateUserProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :user_profiles do |t|
      t.belongs_to :user, foreign_key: true, index: true
      t.string :firstname
      t.string :lastname
      t.datetime :birthdate
      t.string :phone
      t.string :sin
      t.references :address, foreign_key: true

      t.timestamps
    end
  end
end
