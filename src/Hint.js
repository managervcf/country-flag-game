import React from 'react';
import { connect } from 'react-redux';
import { resetGame, showHint } from './actionCreators';

const Hint = props => {
	const capitalHint = `Is has a capital city called ${props.capital}.`;
	const populationHint = `${props.population
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} people live there.`;
	const hintMessage = (
		props.hint &&
		<span>
			{Math.random() > 0.5 ? populationHint : capitalHint}
		</span>
	);
	const correctAnswer = props.countries.find(country => (
		country.flag === props.flag
	))
	return (
		<div className="hint">
			{props.gameWon &&
			<h4>
				{!props.hint
					? 'Correct.'
					: 'Good guess. Try without a hint next time.'}
			</h4>}
			{props.gameLost &&
			<h4>
				{!props.hint
					? `Wrong. The answer is ${correctAnswer.name}.`
					: 'Wrong. Even a hint didn\'t help?'}
			</h4>}
			{(!props.gameWon && !props.gameLost) &&
			<button
				className='hint-button'
				onClick={props.showHint}>
				{(props.hint && hintMessage) || '?'}
			</button>}
		</div>
	);
}

const mapStateToProps = reduxState => ({
  ...reduxState
});

export default connect(mapStateToProps, { resetGame, showHint })(Hint);