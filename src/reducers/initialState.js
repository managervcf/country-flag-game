// Initialize state when app starts
export default {
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
	hint: false,
	gameOverMessages: {
		terrible: 'Seriously, go back to school.',
		bad: 'World map is not your best friend.',
		ok: 'Not bad, but could be better.',
		good: 'Nice, decent score.',
		great: 'Great score, congratulations.',
		perfect: 'Legendary. Now go and explore!'
	},
	toggleVisibility(
		classes = '',
		condition = true,
		newClassIfTrue = '',
		newClassIfFalse = ''
	) {
		return newClassIfTrue
			? condition
				? `${classes} ${newClassIfTrue}`
				: `${classes} ${newClassIfFalse}`
			: condition
				? `${classes} show`
				: `${classes} hide`;
	}
};
