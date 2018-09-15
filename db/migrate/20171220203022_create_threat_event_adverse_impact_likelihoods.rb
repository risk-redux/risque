class CreateThreatEventAdverseImpactLikelihoods < ActiveRecord::Migration[5.1]
  def change
    create_table :threat_event_adverse_impact_likelihoods do |t|
      t.string :qualitative
      t.integer :quantitative
      t.text :description

      t.timestamps
    end
  end
end
