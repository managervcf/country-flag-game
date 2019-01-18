import React from 'react';
import { connect } from 'react-redux';

const Flag = props => {
	const { countries, flag, gameInProgress, gameLost, toggleVisibility } = props;
	const flagClasses = gameLost ? 'flag wrong-guess-shake' : 'flag';
	return (
		<img
			className={toggleVisibility(flagClasses, gameInProgress)}
			alt={countries.numericCode}
			src={flag}
		/>
	);
};

const mapStateToProps = reduxState => ({
	...reduxState
});

export default connect(mapStateToProps)(Flag);
