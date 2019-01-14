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
    this.props.resetFlag();
  }

  async handleNewGame() {
    await this.props.resetFlag();
    this.props.restartGame();
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.numOfGuesses < 10 ? (
          <main>
            <Flag />
            <CountryButtons />
            <Hint />
          </main>
        ) : (
          <main>
            <h1>Good job. You made to the end.</h1>
            <button className="hint-button" onClick={this.handleNewGame}>
              Try Again
            </button>
          </main>
        )}
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
