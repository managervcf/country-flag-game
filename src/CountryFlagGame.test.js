import React from 'react';
import ReactDOM from 'react-dom';
import CountryFlagGame from './CountryFlagGame';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CountryFlagGame />, div);
  ReactDOM.unmountComponentAtNode(div);
});
