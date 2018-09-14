json.extract! personal_loan, :id, :purpose, :amount, :user_id, :created_at, :updated_at
json.url personal_loan_url(personal_loan, format: :json)
