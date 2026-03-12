const WEATHER_DB = {
 Oslo: {
 wind: { speed: 8, deg: 170 },
 clouds: 0,
 temp: 0,
 precipitation: 0
 },
 Berlin: {
 wind: { speed: 16, deg: 117 },
 clouds: 30,
 temp: 5,
 precipitation: 10
 },
 Yakutsk: {
 wind: { speed: 0, deg: 0 },
 clouds: 0,
 temp: -40,
 precipitation: 0
 }
};
function fetchWeather(city) {
 return new Promise((resolve, reject) => {
 setTimeout(() => {
 if (WEATHER_DB[city]) {
 resolve({ city, weather: WEATHER_DB[city] });
 } else {
 reject(new Error(`City not found: ${city}`));
 }
 }, 100);
 });
}
function printWeatherEntry(entry, info) {
 const { city, weather } = entry;
 console.log(`CITY: ${city}`);
 const w = weather;
 if (info === 'wind' || info === 'all') {
 console.log(`WIND: ${w.wind.speed} m/s, ${w.wind.deg} deg`);
 if (w.wind.speed > 15) {
 console.log('WARNING! Wind speed over 15 m/s');
 }
 }
 if (info === 'all') {
 console.log(`CLOUDS: ${w.clouds} %`);
 console.log(`TEMP: ${w.temp} C`);
 if (w.temp < -20) {
 console.log('WARNING! Temperature below -20 degrees');
 }
 console.log(`PRECIPITATION: ${w.precipitation} %`);
 console.log('');
 }
}
function getWeather(cityOrCities, info) {
 if (typeof cityOrCities === 'string') {
 return fetchWeather(cityOrCities)
 .then(entry => {
 printWeatherEntry(entry, info);
 return entry;
 })
 .catch(err => {
 console.log(err.message);
 });
 }
 if (Array.isArray(cityOrCities)) {
 const promises = cityOrCities.map(c => fetchWeather(c));
 return Promise.all(promises)
 .then(entries => {
 entries.forEach(e => printWeatherEntry(e, info));
 return entries;
 })
 .catch(err => {
 console.log(err.message);
 });
 }
}

async function getWeatherAsync(cityOrCities, info) {
 try {
 if (typeof cityOrCities === 'string') {
 const entry = await fetchWeather(cityOrCities);
 printWeatherEntry(entry, info);
 return entry;
 }
 if (Array.isArray(cityOrCities)) {
 const entries = await Promise.all(cityOrCities.map(c =>
fetchWeather(c)));
 entries.forEach(e => printWeatherEntry(e, info));
 return entries;
 }
 } catch (err) {
 console.log(err.message);
 }
}
// tests (async version)
getWeatherAsync('Berlin', 'wind');
getWeatherAsync(['Oslo', 'Yakutsk'], 'all');