import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { resetGame } from './actionCreators';

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