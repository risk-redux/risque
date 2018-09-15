class AddAuthorToThreatOrientedRiskObjectTable < ActiveRecord::Migration[5.1]
  def change
    add_column :threat_oriented_risk_objects, :account_id, :integer
  end
end
