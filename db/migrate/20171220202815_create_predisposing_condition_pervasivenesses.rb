class CreatePredisposingConditionPervasivenesses < ActiveRecord::Migration[5.1]
  def change
    create_table :predisposing_condition_pervasivenesses do |t|
      t.string :qualitative
      t.integer :quantitative
      t.text :description

      t.timestamps
    end
  end
end
