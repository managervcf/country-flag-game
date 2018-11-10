import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({resetGame}) => {
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

Navbar.propTypes = {
	resetGame: PropTypes.func.isRequired
}

export default Navbar;