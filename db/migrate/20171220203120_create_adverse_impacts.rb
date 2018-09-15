class CreateAdverseImpacts < ActiveRecord::Migration[5.1]
  def change
    create_table :adverse_impacts do |t|
      t.string :type
      t.text :description

      t.timestamps
    end
  end
end
