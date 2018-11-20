import React from 'react';
import Navbar from './Navbar';
import CountryOptions from './CountryOptions';
import Flag from './Flag';
import Hint from './Hint';
import './styles.css';

const CountryFlagGame = () => {
  return (
    <div>
      <Navbar />
      <main>
        <CountryOptions />
        <Flag />
        <Hint />
      </main>
    </div>
  );
}

export default CountryFlagGame;
