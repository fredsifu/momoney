class CreatePersonalLoans < ActiveRecord::Migration[5.2]
  def change
    create_table :personal_loans do |t|
      t.integer :purpose
      t.decimal :amount, precision: 20, scale: 10
      t.belongs_to :user, foreign_key: true, index: true

      t.timestamps
    end
  end
end
