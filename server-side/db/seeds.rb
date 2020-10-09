# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

cities = File.read('/Users/user/Development/code/portfolio-projects/react-redux-final-project/server-side/db/pr.json')

JSON.parse(cities).each do 
    |city| Location.create(name: city["city"], latitude: city["lat"], longitude: city["lng"])
end