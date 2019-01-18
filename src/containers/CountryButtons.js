import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CountryOptions extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(country) {
		const { gameOver, resetFlag, checkAnswer } = this.props;
		checkAnswer(country);
		setTimeout(() => (!gameOver ? resetFlag() : null), 1300);
	}

	render() {
		const { countries, flag, gameInProgress, toggleVisibility } = this.props;
		const { handleClick } = this;
		const countryButtons = countries.map((country, index) => {
			const buttonClasses = !gameInProgress
				? flag === country.flag
					? 'won hide'
					: 'lost hide'
				: 'show';
			return (
				<button
					className={toggleVisibility(
						'country-buttons',
						true,
						buttonClasses,
						!buttonClasses
					)}
					onClick={() => (gameInProgress ? handleClick(country) : null)}
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
