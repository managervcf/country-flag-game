import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetGame, checkAnswer } from '../actions';

class CountryOptions extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
  
  handleClick(country) {
    this.props.checkAnswer(country);
    const delay = this.props.hint ? 2200 : 1500;
    setTimeout(() => this.props.resetGame(), delay);
  }

  render() {
		const countryButtons = this.props.countries.map((country, index) => {
			return (
				<button
					className='country-buttons'
					onClick={() =>
						(!this.props.gameWon && !this.props.gameLost)
							? this.handleClick(country)
							: null}
					key={index}>
					{country.name}
				</button>
			)
		});
		return (
			<nav>
				{countryButtons}
			</nav>
		);  	
  }
}

const mapStateToProps = reduxState => ({
	...reduxState
});

export default connect(mapStateToProps, { resetGame, checkAnswer })(CountryOptions);