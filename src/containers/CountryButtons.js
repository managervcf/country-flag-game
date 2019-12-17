import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CountryOptions extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(country) {
    const { gameInProgress, checkAnswer, fetchFlag, nextRound } = this.props;
    if (gameInProgress) {
      checkAnswer(country);
      setTimeout(async () => {
        await fetchFlag();
        nextRound();
      }, 1250);
    }
  }

  render() {
    const { countries, flag, gameInProgress, toggleVisibility } = this.props;
    const { handleClick } = this;
    const countryButtons = countries.map((country, index) => {
      const buttonClasses = !gameInProgress
        ? flag === country.flag
          ? 'won hide'
          : 'lost hide'
        : 'show';
      return (
        <button
          className={toggleVisibility(
            'country-buttons',
            true,
            buttonClasses,
            !buttonClasses
          )}
          onClick={() => handleClick(country)}
          key={index}
        >
          {country.name}
        </button>
      );
    });
    return <nav>{countryButtons}</nav>;
  }
}

const mapStateToProps = reduxState => ({
  ...reduxState
});

export default connect(mapStateToProps, actions)(CountryOptions);
