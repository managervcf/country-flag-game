import {
	FETCH_FLAG,
	NEXT_ROUND,
	CHECK_ANSWER,
	SHOW_HINT,
	RESTART_GAME
} from '../constants';

const url = 'https://restcountries.eu/rest/v2/all';

export const fetchFlag = () => async dispatch => {
	const response = await fetch(url);
	const allCountries = await response.json();
	dispatch({
		type: FETCH_FLAG,
		allCountries
	});
};

export const nextRound = () => ({
	type: NEXT_ROUND
})

export const checkAnswer = country => ({
	type: CHECK_ANSWER,
	country
});

export const showHint = () => ({
	type: SHOW_HINT
});

export const restartGame = () => ({
	type: RESTART_GAME
});

