class CreateThreatEventRelevances < ActiveRecord::Migration[5.1]
  def change
    create_table :threat_event_relevances do |t|
      t.string :qualitative
      t.text :description

      t.timestamps
    end
  end
end
