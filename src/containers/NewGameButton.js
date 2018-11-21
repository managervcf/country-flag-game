import React from 'react';
import { connect } from 'react-redux';
import { resetGame } from '../actions';

const NewGameButton = ({ resetGame }) => (
	<button
		className='new-game-button'
		onClick={resetGame}>
		New Game
	</button>
);


export default connect(null, { resetGame })(NewGameButton);