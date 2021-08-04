class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :line_id, null: false, unique: true

      t.timestamps
    end
  end
end
