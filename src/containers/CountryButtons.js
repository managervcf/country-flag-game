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
		setTimeout(
			() => (!this.props.gameOver ? this.props.resetFlag() : null),
			1500
		);
	}

	render() {
		const {
			countries,
			flag,
			gameInProgress,
			gameOver,
			toggleVisibility
		} = this.props;
		const { handleClick } = this;
		const buttonClasses = this.props.toggleVisibility(
			'country-buttons',
			this.props.gameInProgress
		);
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
		// Render final element
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
