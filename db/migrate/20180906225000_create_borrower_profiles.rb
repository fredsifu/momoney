class CreateBorrowerProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :borrower_profiles do |t|
      t.belongs_to :user, foreign_key: true, index: true
      t.boolean :bankcruptcy
      t.integer :ownership
      t.decimal :other_revenues, precision: 20, scale: 10
      t.decimal :assets, precision: 20, scale: 10
      t.integer :credit_appreciation

      t.timestamps
    end
  end
end
