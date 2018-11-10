import React from 'react';
import ReactDOM from 'react-dom';
import CountryFlagGame from './CountryFlagGame';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<CountryFlagGame />, document.getElementById('root'));

serviceWorker.unregister();
