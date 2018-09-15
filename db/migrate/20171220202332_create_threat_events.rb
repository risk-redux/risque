class CreateThreatEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :threat_events do |t|
      t.string :type
      t.string :ttp
      t.text :description
      t.boolean :is_adversarial

      t.timestamps
    end
  end
end
