import React from 'react';
import { connect } from 'react-redux';
import { resetGame } from '../actions';

const Navbar = ({ resetGame }) => {
	return (
		<header>
			<h1>Coutry Flag Game</h1>
			<button
				className='new-game-button'
				onClick={resetGame}>
				New Game
			</button>
		</header>
	);
}

export default connect(null, { resetGame })(Navbar);