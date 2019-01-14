import { RESET_FLAG, CHECK_ANSWER, SHOW_HINT, RESTART_GAME } from '../constants';

const url = 'https://restcountries.eu/rest/v2/all';

const resetFlagAction = allCountries => ({
	type: RESET_FLAG,
	allCountries
});

const checkAnswerAction = country => ({
	type: CHECK_ANSWER,
	country
});

const showHintAction = () => ({
	type: SHOW_HINT
});

const restartGameAction = () => ({
	type: RESTART_GAME
})

export const resetFlag = () => async dispatch => {
	const response = await fetch(url);
	const allCountries = await response.json();
	dispatch(resetFlagAction(allCountries));
};

export const checkAnswer = country => dispatch => {
	dispatch(checkAnswerAction(country));
};

export const showHint = () => dispatch => {
	dispatch(showHintAction());
};

export const restartGame = () => dispatch => {
	dispatch(restartGameAction());
}
