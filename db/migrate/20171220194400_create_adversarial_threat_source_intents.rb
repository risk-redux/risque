class CreateAdversarialThreatSourceIntents < ActiveRecord::Migration[5.1]
  def change
    create_table :adversarial_threat_source_intents do |t|
      t.string :qualitative
      t.integer :quantitative
      t.text :description

      t.timestamps
    end
  end
end
