class CreateLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :locations do |t|
      t.string :name
      t.decimal :latitude, precision: 13, scale: 10
      t.decimal :longitude, precision: 13, scale: 10

      t.timestamps
    end
  end
end
