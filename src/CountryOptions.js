import React from 'react';

const CountryOptions = (props) => {
	const countryButtons = props.countries.map((country, index) => {
		let isDisabled = props.clickedFlags !== props.flag &&
				props.clickedFlags.includes(country.flag);
		let styles = isDisabled ? {opacity: 0}	: null;
		return (
			<button
				className='country-buttons'
				onClick={() => !props.gameWon ? props.handleClick(country) : null}
				key={index}
				disabled={isDisabled}
				style={styles}>
				{country.name}
			</button>
		)
	});
	return (<nav>{countryButtons}</nav>);
}

export default CountryOptions;