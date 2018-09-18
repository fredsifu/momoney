class BorrowerProfile < ApplicationRecord
  belongs_to :user

  enum ownership: %i[owner tenant]
  enum credit_appreciation: %i[poor fair good very_good excellent]

  def self.ownerships_for_select
    ownerships.map { |ownership, _|
      [I18n.t("activerecord.attributes.#{model_name.i18n_key}.ownerships.#{ownership}"),
       BorrowerProfile.ownerships[ownership]]
    }.to_h
  end

  def selected_ownership
    BorrowerProfile.ownerships[ownership]
  end

  def self.credit_appreciations_for_select
    credit_appreciations.map { |credit_appreciation, _|
      [I18n.t("activerecord.attributes.#{model_name.i18n_key}.credit_appreciations.#{credit_appreciation}"),
       BorrowerProfile.credit_appreciations[credit_appreciation]]
    }.to_h
  end

  def selected_credit_appreciation
    BorrowerProfile.credit_appreciations[credit_appreciation]
  end
end
