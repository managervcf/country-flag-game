import React from 'react';
import { connect } from 'react-redux';

const Flag = ({
	countries,
	flag,
	gameInProgress,
	gameLost,
	toggleVisibility
}) => {
	const flagClasses = gameLost ? 'flag wrong-guess' : 'flag';
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
