import React from 'react';
import { connect } from 'react-redux';

const Header = ({ score, numOfGuesses, gameInProgress }) => {
	return (
		<header>
			<h1>Country Flag Game</h1>
			{score === 0 && numOfGuesses === 0 ? (
				<p>Do you recognize this flag?</p>
			) : (
				<p>
					Your score: {score} / {numOfGuesses}
				</p>
			)}
		</header>
	);
};

const mapStateToProps = reduxState => ({
	...reduxState
});

export default connect(mapStateToProps)(Header);
