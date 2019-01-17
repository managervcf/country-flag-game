import React from 'react';
import { connect } from 'react-redux';

const Header = props => {
	return (
		<header>
			<h1>Country Flag Game</h1>
			{props.score === 0 && props.numOfGuesses === 0 ? (
				<p className="score">Do you recognize this flag?</p>
			) : (
				<p className={props.toggleVisibility('score', props.gameOver, 'win')}>
					Your score: {props.score} / {props.numOfGuesses}
				</p>
			)}
		</header>
	);
};

const mapStateToProps = reduxState => ({
	...reduxState
});

export default connect(mapStateToProps)(Header);
