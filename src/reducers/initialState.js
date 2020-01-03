// Initialize state when app starts
export default {
  flag: '',
  capital: '',
  countries: [],
  population: 0,
  score: 0,
  numOfGuesses: 0,
  maxGuesses: 10,
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
  displayResultMessage(score, gameOver, gameOverMessages) {
    const {
      terrible,
      bad,
      ok,
      good,
      great,
      perfect
    } = gameOverMessages;
    if (!gameOver) return ' ';
    if (score < 2) return terrible;
    if (2 <= score && score < 4) return bad;
    if (4 <= score && score < 6) return ok;
    if (6 <= score && score < 8) return good;
    if (8 <= score && score < 10) return great;
    if (score === 10) return perfect;
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
