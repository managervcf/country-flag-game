import React from 'react';
import { connect } from 'react-redux';

const Flag = ({ countries, flag }) => {
	return (
		<img
			alt={countries.numericCode}
			src={flag}/>
	);
}

const mapStateToProps = reduxState => ({
  countries: reduxState.countries,
  flag: reduxState.flag
});

export default connect(mapStateToProps)(Flag);