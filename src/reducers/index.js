import {
	RESET_FLAG,
	SHOW_HINT,
	CHECK_ANSWER,
	RESTART_GAME
} from '../constants';

const initialState = {
	flag: '',
	capital: '',
	countries: [],
	population: 0,
	score: 0,
	numOfGuesses: 0,
	numOfGuessOptions: 3,
	gameInProgress: true,
	gameWon: false,
	gameLost: false,
	gameOver: false,
	hint: false
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case RESET_FLAG:
			const { allCountries } = action;
			const length = allCountries.length;
			const randomIndexes = Array.from(
				{ length: state.numOfGuessOptions },
				() => Math.floor(Math.random() * length - 1)
			);
			const countries = allCountries.filter((country, index) =>
				randomIndexes.includes(index)
			);
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
				hint: false
			};
		case SHOW_HINT:
			return !state.gameWon && !state.hint
				? { ...state, score: state.score - 0.5, hint: true }
				: { ...state };
		case CHECK_ANSWER:
			return state.flag === action.country.flag
				? {
						...state,
						score: state.score + 1,
						numOfGuesses: state.numOfGuesses + 1,
						gameWon: true,
						gameInProgress: false
				  }
				: {
						...state,
						numOfGuesses: state.numOfGuesses + 1,
						gameLost: true,
						gameInProgress: false
				  };
		case RESTART_GAME:
			return { ...state, numOfGuesses: 0, score: 0 };
		default:
			return state;
	}
};

export default rootReducer;
