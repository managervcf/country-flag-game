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
  }
  componentWillMount() {
    return !this.props.gameOver ? this.props.resetFlag() : null;
  }

  async handleNewGame() {
    await this.props.resetFlag();
    this.props.restartGame();
  }

  render() {
    return (
      <div>
        <Header />
        <main>
          <div
            className={this.props.toggleVisibility(
              'game-over-content',
              this.props.gameOver
            )}
          >
            <h3>Wow, you must really like this boring game.</h3>
            <button className="new-game-button" onClick={this.handleNewGame}>
              Try Again
            </button>
          </div>
          <div
            className={this.props.toggleVisibility(
              'game-content',
              !this.props.gameOver
            )}
          >
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
