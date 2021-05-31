# Weather-app
App shows weather in selected region using AccuWeather API
# Project Specification
- Get city keyword from user's input
- Get data about this city frome weather API
- Display city, temperature, weather conditions using DOM manipulations
- Update daytime image using information from JSON
- Update weather icon using inforamtion about weather conditions
- Store data about last query in local storage
# Soultion
## forecast.js
In this file we get and return 2 pieces of data from weather-API.
I did two separate functions to get data from two API end-points:
1. getCity - get infomation about location
2. getWeather - get information about weather knowing location
## app.js
Here we get user input, pass it to async function that gets data from API-functions, and Update UI.
1. updateCity: gets information about city and weather using functions stored in forecast.js
2. updateUI: gets data and updates HTML code and images
3. addEventListener: gets user input, pass it through updateCity, gets data, passes this data to updateUI, printing error message if there are some errors, and saves information to local storage
