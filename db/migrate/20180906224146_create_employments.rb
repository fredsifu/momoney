class CreateEmployments < ActiveRecord::Migration[5.2]
  def change
    create_table :employments do |t|
      t.belongs_to :user, foreign_key: true, index: true
      t.integer :status
      t.datetime :since
      t.string :employer
      t.string :title
      t.decimal :revenues, precision: 20, scale: 10

      t.timestamps
    end
  end
end
