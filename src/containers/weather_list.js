import React, { Component } from 'react';
import { connect } from 'react-redux';


export default class WeatherList extends Component {

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



function mapStateToProps(state){

	return { weather: state.weather };
	//state.weather came from index.js combineReducers
}