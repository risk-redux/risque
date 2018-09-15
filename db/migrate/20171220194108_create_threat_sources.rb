class CreateThreatSources < ActiveRecord::Migration[5.1]
  def change
    create_table :threat_sources do |t|
      t.string :type
      t.text :description
      t.boolean :is_adversarial

      t.timestamps
    end
  end
end
