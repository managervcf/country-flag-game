import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Hint = props => {
	const capitalHint = `Is has a capital city called ${props.capital}.`;
	const populationHint = `${props.population
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} people live there.`;
	const hintMessage = props.hint && (
		<span>{Math.random() > 0.5 ? populationHint : capitalHint}</span>
	);
	const correctAnswer = props.countries.find(
		country => country.flag === props.flag
	);
	const boldFont = { fontWeight: 'bold' };
	return (
		<div className="hint">
			{props.gameInProgress ? (
				<p onClick={props.showHint}>
					{(props.hint && hintMessage) || 'Get a hint for 0.5 point.'}
				</p>
			) : (
				<p style={boldFont}>
					{props.gameWon
						? !props.hint
							? 'Correct.'
							: 'Good guess. Try without a hint next time.'
						: !props.hint
							? `Wrong. The answer is ${correctAnswer.name}.`
							: "Wrong. Even a hint didn't help?"}
				</p>
			)}
		</div>
	);
};

const mapStateToProps = reduxState => ({
	...reduxState
});

export default connect(
	mapStateToProps,
	actions
)(Hint);
