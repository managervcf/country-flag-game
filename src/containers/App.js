import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetGame } from '../actions';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewGameButton from './NewGameButton';
import CountryButtons from './CountryButtons';
import Flag from './Flag';
import Hint from './Hint';

class CountryFlagGame extends Component {
  componentWillMount() {
    this.props.resetGame();
  }
  render() {
    return (
      <div>
        <Header />
        <main>
          <NewGameButton />
          <CountryButtons />
          <Flag />
          <Hint />
        </main>
        <Footer />
      </div>
    );
  }
}

export default connect(null, { resetGame })(CountryFlagGame);
