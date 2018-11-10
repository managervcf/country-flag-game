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
      numbersOfGuessOptions: 4,
      flag: '',
      countries: [],
      gameWon: false,
      hint: false,
      clickedFlags: [],
      population: 0,
      capital: ''
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
    if (this.state.flag === country.flag) {
      const delay = this.state.hint ? 2100 : 1300;
      setTimeout(() => this.resetGame(), delay);
      this.setState({gameWon: true});
    } else {
      this.setState(prevState => ({
        clickedFlags: [...prevState.clickedFlags, country.flag]
      }));     
    }
  }

  async resetGame() {
    const url = 'https://restcountries.eu/rest/v2/all';
    const response = await fetch(url);
    const allCountries = await response.json();
    const length = allCountries.length;
    const randomIndexes = Array.from(
      { length: this.state.numbersOfGuessOptions },
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
      hint: false,
      clickedFlags: [],
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
          <CountryOptions {...this.state} {...this}/>
          <Flag {...this.state} {...this}/>
          <Hint {...this.state} {...this}/>
        </main>
      </div>
    );
  }
}

export default CountryFlagGame;
