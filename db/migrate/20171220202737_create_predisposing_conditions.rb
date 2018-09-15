class CreatePredisposingConditions < ActiveRecord::Migration[5.1]
  def change
    create_table :predisposing_conditions do |t|
      t.string :type
      t.text :description

      t.timestamps
    end
  end
end
