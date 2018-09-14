class PersonalLoan < ApplicationRecord
  belongs_to :user

  enum purpose: %i[vacation debt_consolidation credit_card_refinancing medical_expenses wedding moving_expenses other]

  def self.purposes_for_select
    purposes.map { |purpose, _|
      [I18n.t("activerecord.attributes.#{model_name.i18n_key}.purposes.#{purpose}"), PersonalLoan.purposes[purpose]]
    }.to_h
  end

  def selected_purpose
    PersonalLoan.purposes[purpose]
  end
end
