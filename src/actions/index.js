import axios from 'axios';

const API_KEY = '7ea8496c87abb60152df92467268d225';
//const ROOT_URL = 'http://samples.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;

//ES6 Syntax
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	
	const request = axios.get(url);//This returns promise


	console.log('Request: ', request);

	return{
		type: FETCH_WEATHER,
		payload: request //This is a promise
		//Since we passed a promise to our payload, Redux-promise, a middleware,
	// will stop and create a new action 
	};
}




