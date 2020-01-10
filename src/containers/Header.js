import React from 'react';
import { connect } from 'react-redux';

const Header = props => {
  const { score, numOfGuesses, maxGuesses, toggleVisibility, gameOver } = props;
  return (
    <header>
      <h1>Country Flag Game</h1>
      {score === 0 && numOfGuesses === 0 ? (
        <p className="score">
          Guess {maxGuesses} flags!
          <br />
          Do you recognize this flag?
        </p>
      ) : (
        <>
          <p className={toggleVisibility('score', gameOver, 'enlarge')}>
            Your score:{' '}
            <strong>
              {score} / {maxGuesses}
            </strong>
          </p>
          <progress
            className={toggleVisibility('', !gameOver)}
            max={maxGuesses}
            value={numOfGuesses}
          ></progress>
        </>
      )}
    </header>
  );
};

const mapStateToProps = reduxState => ({
  ...reduxState
});

export default connect(mapStateToProps)(Header);
