import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
	constructor(props){

		super(props);

		this.state = { term: ''};

		/*
		Override local metho onInputChange and onFormSubmit 
		Our callback error can be cleared by binding.(Javascript)
		*/
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event){
		this.setState({term : event.target.value});
	}

	onFormSubmit(event){
		//prevent normal form event(post requrest)
		event.preventDefault();


		//We need to go and fetch data
		this.props.fetchWeather(this.state.term);
		this.setState({ term: ''});

	}




	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input 
					placeholder="Get a five-day forecast in your favorite cities"
					className="form-control"
					value={this.state.term}
					onChange = {this.onInputChange}
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Search</button>
				</span>
			</form>
		)
	}
}

//Binding ActionCreator fetchWeather to SearchBar container
function mapDispatchToProps(dispatch){
	return bindActionCreators({ fetchWeather }, dispatch);

}

export default connect(null, mapDispatchToProps)(SearchBar);