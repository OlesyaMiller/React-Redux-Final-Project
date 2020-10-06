class ChangeDataTypeInLatitudeAndLongitude < ActiveRecord::Migration[6.0]
  def change
    change_column :locations, :longitude, :numeric
    change_column :locations, :latitude, :numeric
  end
end
