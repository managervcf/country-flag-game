import {
	RESET_GAME,
	SHOW_HINT,
	CHECK_ANSWER
} from './actionCreators';

const initialState = {
  numOfGuessOptions: 4,
  flag: '',
  capital: '',     
  population: 0,
  countries: [],
  gameWon: false,
  gameLost: false,
  hint: false,
}

const rootReducer = (state=initialState, action) => {
	switch (action.type) {
		case RESET_GAME:
			const { allCountries } = action;
		  const length = allCountries.length;
		  const randomIndexes = Array.from(
		    { length: state.numOfGuessOptions },
		    () => Math.floor(Math.random() * length)
		  );
		  const countries = allCountries.filter((country, index) => (
		    randomIndexes.includes(index)
		  ));
		  const pickedIndex = Math.floor(Math.random() * countries.length)
		  const { flag, population, capital } = countries[pickedIndex];
			return {
				...state,
				flag,
		    countries,
		    population,
		    capital,
		    gameWon: false,
		    gameLost: false,
		    hint: false
			}
		case SHOW_HINT:
			return !state.gameWon && !state.hint
				? { ...state, hint: true }
	      : { ...state };
	  case CHECK_ANSWER:
	  	return state.flag === action.country.flag
	  		? { ...state, gameWon: true }
	  		: { ...state, gameLost: true };
		default:
			return state;
	}
}

export default rootReducer;

