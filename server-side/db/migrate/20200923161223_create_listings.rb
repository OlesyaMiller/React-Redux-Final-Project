class CreateListings < ActiveRecord::Migration[6.0]
  def change
    create_table :listings do |t|
      t.string :title
      t.string :img-url
      t.string :description
      t.boolean :pets-allowed
      t.boolean :air-conditioning
      t.string :guests
      t.integer :bedrooms
      t.integer :beds
      t.integer :baths
      t.boolean :kitchen
      t.boolean :wifi

      
      t.timestamps
    end
  end
end
