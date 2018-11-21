import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewGameButton from './NewGameButton';
import CountryButtons from './CountryButtons';
import Flag from './Flag';
import Hint from './Hint';

const CountryFlagGame = () => {
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

export default CountryFlagGame;
