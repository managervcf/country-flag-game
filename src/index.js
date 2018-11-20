import React from 'react';
import ReactDOM from 'react-dom';
import CountryFlagGame from './CountryFlagGame';
import * as serviceWorker from './serviceWorker';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const store = createStore(
	rootReducer,
	compose(applyMiddleware(thunk))
);

ReactDOM.render(
	<Provider store={store}>
		<CountryFlagGame />
	</Provider>
	,
	document.getElementById('root')
);

serviceWorker.unregister();
