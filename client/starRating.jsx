import React from 'react';
import Header from './hotelHeader.jsx';

class StarRating extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		const numStars = 3.1

		var decimal = parseFloat(Number.parseFloat(numStars-Math.floor(numStars)).toFixed(1));

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