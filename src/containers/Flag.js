import React from 'react';
import { connect } from 'react-redux';

const Flag = ({ countries, flag, gameInProgress }) => {
	const flagClasses = ['flag'];
	if (!gameInProgress) {
		flagClasses.push('animate');
	}
	return (
		<img 
			className={flagClasses.join(' ')}
			alt={countries.numericCode}
			src={flag}/>
	);
}

const mapStateToProps = (reduxState) => ({
  countries: reduxState.countries,
  flag: reduxState.flag,
  gameInProgress: reduxState.gameInProgress
});

export default connect(mapStateToProps)(Flag);