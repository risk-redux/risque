class CreateAccounts < ActiveRecord::Migration[5.1]
  def change
    create_table :accounts do |t|
      t.string :agency_uid
      t.string :uupic
      t.string :nasa_primary_email
      t.string :canonical_name

      t.timestamps
    end
    add_index :accounts, :uupic, unique: true
  end
end
