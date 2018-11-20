export const RESET_GAME = 'RESET_GAME';
export const SHOW_HINT = 'SHOW_HINT';
export const CHECK_ANSWER = 'CHECK_ANSWER';

const url = 'https://restcountries.eu/rest/v2/all';

const resetGameAction = allCountries => ({
	type: RESET_GAME,
	allCountries
});

const checkAnswerAction = country => ({
	type: CHECK_ANSWER,
	country
});

const showHintAction = () => ({
	type: SHOW_HINT
});

export const resetGame = () => async dispatch => {
  const response = await fetch(url);
  const allCountries = await response.json();
  dispatch(resetGameAction(allCountries));
}

export const checkAnswer = (country) => dispatch => {
	dispatch(checkAnswerAction(country));
}

export const showHint = () => dispatch => {
	dispatch(showHintAction());
}