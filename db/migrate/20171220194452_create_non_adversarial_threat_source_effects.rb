class CreateNonAdversarialThreatSourceEffects < ActiveRecord::Migration[5.1]
  def change
    create_table :non_adversarial_threat_source_effects do |t|
      t.string :qualitative
      t.integer :quantitative
      t.text :description

      t.timestamps
    end
  end
end
