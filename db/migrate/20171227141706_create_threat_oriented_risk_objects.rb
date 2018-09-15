class CreateThreatOrientedRiskObjects < ActiveRecord::Migration[5.1]
  def change
    create_table :threat_oriented_risk_objects do |t|
      t.string :title

      t.timestamps
    end
  end
end
