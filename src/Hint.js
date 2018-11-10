import React from 'react';

const Hint = (props) => {
	const capitalHint = `Is has a capital city called ${props.capital}.`;
	const populationHint = `${props.population
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} people live there.`;
	const hintMessage = <span>{(Math.random() > 0.5 && !props.hint) ? populationHint : capitalHint}</span>;
	const correctAnswer = props.countries.find(country => (
		country.flag === props.flag
	))
	console.log(correctAnswer);
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
			<button
				className='hint-button'
				onClick={props.showHint}>
				{(props.hint && hintMessage) || '?'}
			</button>
		</div>
	);
}

export default Hint;