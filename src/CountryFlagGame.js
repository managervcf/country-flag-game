import React, { Component } from 'react';
import Navbar from './Navbar';
import CountryOptions from './CountryOptions';
import Flag from './Flag';
import Hint from './Hint';
import './styles.css';

class CountryFlagGame extends Component {
	constructor(props) {
		super(props);
		this.state = {
      numOfGuessOptions: 4,
      flag: '',
      capital: '',     
      population: 0,
      countries: [],
      gameWon: false,
      gameLost: false,
      hint: false,
		}
    this.showHint = this.showHint.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.handleClick = this.handleClick.bind(this);
	}

  showHint() {
    if (!this.state.gameWon && !this.state.hint) {
      this.setState({hint: true});
    }
  }

  handleClick(country) {
    const delay = this.state.hint ? 2200 : 1500;
    if (this.state.flag === country.flag) {
      setTimeout(() => this.resetGame(), delay);
      this.setState({gameWon: true});
    } else {
      setTimeout(() => this.resetGame(), delay);
      this.setState({gameLost: true});
    }
  }

  async resetGame() {
    const url = 'https://restcountries.eu/rest/v2/all';
    const response = await fetch(url);
    const allCountries = await response.json();
    const length = allCountries.length;
    const randomIndexes = Array.from(
      { length: this.state.numOfGuessOptions },
      () => Math.floor(Math.random() * length)
    );
    const countries = allCountries.filter((country, index) => (
      randomIndexes.includes(index)
    ));
    const pickedIndex = Math.floor(Math.random() * countries.length)
    const {flag, population, capital} = countries[pickedIndex];
    this.setState({
      flag,
      countries,
      population,
      capital,
      gameWon: false,
      gameLost: false,
      hint: false
    });
  }

  componentDidMount() {
    this.resetGame();
  }

  render() {
    return (
      <div>
        <Navbar resetGame={this.resetGame}/>
        <main>
          <CountryOptions
            {...this.state}
            {...this} />
          <Flag
            {...this.state}
            {...this} />
          <Hint
            {...this.state}
            {...this} />
        </main>
      </div>
    );
  }
}

export default CountryFlagGame;
