class ChangeLatitudeAndLongitudeColumns < ActiveRecord::Migration[6.0]
  def change
    change_column :locations, :longitude, :decimal
    change_column :locations, :latitude, :decimal
  end
end
