cities = File.read('/Users/user/Development/code/portfolio-projects/react-redux-final-project/server-side/db/pr.json')

JSON.parse(cities).each do 
    |city| Location.create(name: city["city"], latitude: city["lat"], longitude: city["lng"])
end