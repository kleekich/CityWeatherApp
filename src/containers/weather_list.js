import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
					</tr>
				</thead>
				<tbody>
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