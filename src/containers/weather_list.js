import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {

	renderWeather(cityData) {
		const name = cityData.city.name;

		const temps = cityData.list.map(weather => weather.main.temp);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);

		return (
			<tr key={name}>
				<td>{name}</td>
				<td><Chart data={temps} color="orange"/></td>
				<td><Chart data={pressures} color="red"/></td>
				<td><Chart data={humidities} color="blue"/></td>	
			</tr>

		);
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>

		);
	}
}


/*

function mapStateToProps(state){
	return { weather: state.weather };
	//state.weather came from index.js combineReducers
}
We can do this with ES6 syntax as below
*/

function mapStateToProps({weather}){
	return { weather }; // { weather } === {weather: weather}
}


export default connect(mapStateToProps)(WeatherList);