import React from 'react';

const Flag = ({countries, flag}) => {
	return (
		<img
			alt={countries.numericCode}
			src={flag}/>
	);
}

export default Flag;