import React from 'react';
import { connect } from 'react-redux';

const Flag = ({ countries, flag, gameInProgress }) => {
	const flagClasses = gameInProgress ? ['flag'] : ['flag animate'];
	return <img className={flagClasses} alt={countries.numericCode} src={flag} />;
};

const mapStateToProps = reduxState => ({
	...reduxState
});

export default connect(mapStateToProps)(Flag);
