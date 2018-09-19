class Employment < ApplicationRecord
  belongs_to :user

  enum status: %i[full_time_employee part_time_employee self_employed seasonal_employee unemployed]

  def self.statuses_for_select
    statuses.map { |status, _|
      [I18n.t("activerecord.attributes.#{model_name.i18n_key}.statuses.#{status}"),
       Employment.statuses[status]]
    }.to_h
  end

  def selected_status
    Employment.statuses[status]
  end
end
