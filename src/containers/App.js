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
  }

  componentDidMount() {
    const { gameOver, fetchFlag } = this.props;
    if (!gameOver) {
      fetchFlag();
    }
  }

  async handleNewGame() {
    const { fetchFlag, restartGame } = this.props;
    await fetchFlag();
    restartGame();
  }

  render() {
    const {
      gameOver,
      score,
      toggleVisibility,
      displayResultMessage,
      gameOverMessages
    } = this.props;
    return (
      <div>
        <Header />
        <main>
          <div className={toggleVisibility('game-over-content', gameOver)}>
            <h3 className="result-message">
              {displayResultMessage(score, gameOver, gameOverMessages)}
            </h3>
            <button className="new-game-button" onClick={this.handleNewGame}>
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

export default connect(mapStateToProps, actions)(CountryFlagGame);
