import React from 'react';
import PropTypes from 'prop-types';
import CountryOptions from './CountryOptions';
import Flag from './Flag';
import Hint from './Hint';

const Board = props => {
	const countryOptionsProps = {
		countries: props.countries,
		flag: props.flag,
		clickedFlags: props.clickedFlags,
		gameWon: props.gameWon,
		handleClick: props.handleClick
	}

	const flagProps = {
		countries: props.countries,
		flag: props.flag
	}

	const hintProps = {
		countries: props.countries,
		flag: props.flag,
		population: props.population,
		clickedFlags: props.clickedFlags,
		gameWon: props.gameWon,
		showHint: props.showHint,
		hint: props.hint
	}

	return (
		<main>
			<CountryOptions {...countryOptionsProps} />
			<Flag {...flagProps} />
			<Hint {...hintProps} />
		</main>
	);
}

Board.propTypes = {
	flag: PropTypes.string.isRequired,
	countries: PropTypes.arrayOf(PropTypes.object).isRequired,
	gameWon: PropTypes.bool.isRequired,
	hint: PropTypes.bool.isRequired,
	population: PropTypes.number.isRequired,
	capital: PropTypes.string.isRequired,
	clickedFlags: PropTypes.array.isRequired,
	showHint: PropTypes.func.isRequired,
	resetGame: PropTypes.func.isRequired,
	handleClick: PropTypes.func.isRequired
}

export default Board;