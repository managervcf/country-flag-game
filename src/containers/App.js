import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CountryButtons from './CountryButtons';
import Flag from './Flag';
import Hint from './Hint';

class CountryFlagGame extends Component {
  constructor(props) {
    super(props);
    this.handleNewGame = this.handleNewGame.bind(this);
    this.displayResultMessage = this.displayResultMessage.bind(this);
  }
  componentWillMount() {
    return !this.props.gameOver ? this.props.resetFlag() : null;
  }

  async handleNewGame() {
    await this.props.resetFlag();
    this.props.restartGame();
  }

  displayResultMessage() {
    const { score, gameOver } = this.props;
    const {
      veryBad,
      bad,
      ok,
      good,
      veryGood,
      perfect
    } = this.props.gameOverMessages;
    if (!gameOver) return ' ';
    if (gameOver && score < 2) return veryBad;
    if (2 <= score && score < 4) return bad;
    if (4 <= score && score < 6) return ok;
    if (6 <= score && score < 8) return good;
    if (8 <= score && score < 10) return veryGood;
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
