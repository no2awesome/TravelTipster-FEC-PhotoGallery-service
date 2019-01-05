import React from 'react';
import Header from './hotelHeader.jsx';

class StarRating extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		const numStars = Math.floor(this.props.rating);

		var decimal = parseFloat(Number.parseFloat(this.props.rating-Math.floor(this.props.rating)).toFixed(1));

		return (
			<div id="stars">
				<img src="./img/star-filled.svg" />
				<img src="./img/star-filled.svg" />
				<img src="./img/star-filled.svg" />
				<img src="./img/star-empty.svg" />
				<img src="./img/star-empty.svg" />
			</div>
		)
	}
}

export default StarRating;