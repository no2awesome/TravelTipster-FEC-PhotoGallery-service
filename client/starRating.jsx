import React from 'react';
import Header from './hotelHeader/hotelHeader.jsx';

class StarRating extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const rating = this.props.rating;

		let filledStars = Math.floor(rating);
		let emptyStars = 5 - filledStars;
		let hasHalfStar = false;

		var decimal = parseFloat(Number.parseFloat(rating-Math.floor(rating)).toFixed(1));

		if (decimal > .66) {
			filledStars += 1;
			emptyStars = 5 - filledStars;
		} else if (decimal > .33) {
			hasHalfStar = true;
			emptyStars -= 1;
		}

		let stars = []

		for (var i = 0; i < filledStars; i++) {
			stars.push(<img src="./img/star-filled.svg" key={"filled-star-" + i} />)
		}

		if (hasHalfStar) { stars.push(<img src="./img/star-half.svg" />) }

		for (var i = 0; i < emptyStars; i++) {
			stars.push(<img src="./img/star-empty.svg" key={"empty-star-" + i} />)
		}


		return (
			<div id="stars">
				{stars}
			</div>
		)
	}
}

export default StarRating;