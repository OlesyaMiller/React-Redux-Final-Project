class CreateListings < ActiveRecord::Migration[6.0]
  def change
    create_table :listings do |t|
      t.string :title
      t.string :img_url
      t.string :description
      t.boolean :pets_allowed
      t.boolean :air_conditioning
      t.integer :guests
      t.integer :bedrooms
      t.integer :beds
      t.integer :baths
      t.boolean :kitchen
      t.boolean :wifi
      t.integer :location_id

      t.timestamps
    end
  end
end
