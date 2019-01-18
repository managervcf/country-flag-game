import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Hint = props => {
	const capitalHint = `Capital city is called ${props.capital}.`;
	const populationHint = `${props.population
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, ',')} people live there.`;
	const hintMessage = props.hint && (
		<span>{Math.random() > 0.5 ? populationHint : capitalHint}</span>
	);
	const correctAnswer = props.countries.find(
		country => country.flag === props.flag
	);
	return (
		<div className="hint">
			{props.gameInProgress ? (
				<p onClick={props.showHint}>
					{(props.hint && hintMessage) || 'Get a hint for 0.5 point.'}
				</p>
			) : (
				<p style={{ fontWeight: 'bold' }}>
					{props.gameWon
						? !props.hint
							? 'Correct.'
							: 'Correct. Try without a hint next time.'
						: !props.hint
							? `Wrong.`
							: "Even a hint didn't help?"}
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
