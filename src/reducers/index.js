import initialState from './initialState';
import {
	RESET_FLAG,
	SHOW_HINT,
	CHECK_ANSWER,
	RESTART_GAME
} from '../constants';

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case RESET_FLAG:
			const { allCountries } = action;
			const length = allCountries.length;
			const countries = [];
			// Loop over data and pick unique countries
			while (countries.length < state.numOfGuessOptions) {
				let randomIndex = Math.floor(Math.random() * length);
				let randomCountry = allCountries[randomIndex];
				if (countries.indexOf(randomCountry) === -1) {
					countries.push(randomCountry);
				}
			}
			const pickedIndex = Math.floor(Math.random() * countries.length);
			const { flag, population, capital } = countries[pickedIndex];
			return {
				...state,
				flag,
				countries,
				population,
				capital,
				gameInProgress: true,
				gameWon: false,
				gameLost: false,
				hint: false,
			};
		case SHOW_HINT:
			return !state.gameWon && !state.hint
				? { ...state, score: state.score - 0.5, hint: true }
				: { ...state };
		case CHECK_ANSWER:
			const isFlagGuessed = state.flag === action.country.flag;
			return {
				...state,
				score: isFlagGuessed ? state.score + 1 : state.score,
				numOfGuesses: state.numOfGuesses + 1,
				gameWon: isFlagGuessed,
				gameLost: !isFlagGuessed,
				gameInProgress: false,
				gameOver: state.numOfGuesses >= state.maxGuesses - 1 ? true : false
			};
		case RESTART_GAME:
			return { ...state, numOfGuesses: 0, score: 0, gameOver: false };
		default:
			return state;
	}
};

export default rootReducer;
