import React from 'react';

const CountryOptions = (props) => {
	const countryButtons = props.countries.map((country, index) => {
		return (
			<button
				className='country-buttons'
				onClick={() =>
					(!props.gameWon || !props.gameLost)
						? props.handleClick(country)
						: null}
				key={index}>
				{country.name}
			</button>
		)
	});
	return (<nav>{countryButtons}</nav>);
}

export default CountryOptions;