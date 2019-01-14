import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CountryOptions extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(country) {
		this.props.checkAnswer(country);
		setTimeout(() => this.props.resetFlag(), 1800);
	}

	render() {
		const countryButtons = this.props.countries.map((country, index) => {
			const buttonClasses = ['country-buttons'];
			if (!this.props.gameInProgress) {
				buttonClasses.push('animate');
			}
			return (
				<button
					className={buttonClasses.join(' ')}
					onClick={() =>
						this.props.gameInProgress ? this.handleClick(country) : null
					}
					key={index}
				>
					{country.name}
				</button>
			);
		});
		return <nav>{countryButtons}</nav>;
	}
}

const mapStateToProps = reduxState => ({
	...reduxState
});

export default connect(
	mapStateToProps,
	actions
)(CountryOptions);
