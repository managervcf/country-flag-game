import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Footer from '../components/Footer';
import CountryButtons from './CountryButtons';
import Header from './Header';
import Flag from './Flag';
import Hint from './Hint';

class CountryFlagGame extends Component {
  constructor(props) {
    super(props);
    this.handleNewGame = this.handleNewGame.bind(this);
    this.displayResultMessage = this.displayResultMessage.bind(this);
  }
  componentWillMount() {
    const { gameOver, resetFlag } = this.props;
    return !gameOver ? resetFlag() : null;
  }

  async handleNewGame() {
    const { resetFlag, restartGame } = this.props;
    await resetFlag();
    restartGame();
  }

  displayResultMessage() {
    const { score, gameOver } = this.props;
    const {
      terrible,
      bad,
      ok,
      good,
      great,
      perfect
    } = this.props.gameOverMessages;
    if (!gameOver) return ' ';
    if (score < 2) return terrible;
    if (2 <= score && score < 4) return bad;
    if (4 <= score && score < 6) return ok;
    if (6 <= score && score < 8) return good;
    if (8 <= score && score < 10) return great;
    if (score === 10) return perfect;
  }

  render() {
    const { displayResultMessage, handleNewGame } = this;
    const { toggleVisibility, gameOver } = this.props;
    return (
      <div>
        <Header />
        <main>
          <div className={toggleVisibility('game-over-content', gameOver)}>
            <h3 className="result-message">{displayResultMessage()}</h3>
            <button className="new-game-button" onClick={handleNewGame}>
              Try Again
            </button>
          </div>
          <div className={toggleVisibility('game-content', !gameOver)}>
            <Flag />
            <CountryButtons />
            <Hint />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  ...reduxState
});

export default connect(
  mapStateToProps,
  actions
)(CountryFlagGame);
