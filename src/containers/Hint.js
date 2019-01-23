import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Hint = props => {
	const {
		capital,
		population,
		hint,
		gameInProgress,
		gameWon,
		showHint
	} = props;
	const capitalHint = `Capital city is called ${capital}.`;
	const populationHint = `${population
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} people live there.`;
	const hintMessage = hint
		? Math.random() > 0.5
			? populationHint
			: capitalHint
		: 'Get a hint for 0.5 point.';
	const isCorrectMessage = gameWon
		? !hint
			? 'Correct.'
			: 'Correct. Try without a hint next time.'
		: !hint
			? `Wrong.`
			: "Even a hint didn't help?";
	const outputMessage = gameInProgress ? (
		<p onClick={showHint}>{hintMessage}</p>
	) : (
		<p className="is-correct-message">{isCorrectMessage}</p>
	);
	return <div className="hint">{outputMessage}</div>;
};

const mapStateToProps = reduxState => ({
	...reduxState
});

export default connect(
	mapStateToProps,
	actions
)(Hint);
