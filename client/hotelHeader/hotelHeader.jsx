import React from 'react';
import axios from 'axios';
import StarRating from './../starRating/starRating.jsx';
import style from './hotelHeader.css';
// require('svg-url-loader!./../../public/img/portfolio.svg');
// require('svg-url-loader!./../../public/img/chat.svg');
// require('svg-url-loader!./../../public/img/profile.svg');

import portfolio from './../../public/img/portfolio.png';
import chat from './../../public/img/chat.png';
import profile from './../../public/img/profile.png';

class Header extends React.Component {
	constructor() {
		super();
		this.state = {
		}
	}

	componentDidMount() {
		const self = this;
		// GET request

		console.log(this.props.hotel)
		axios.get(`/hotel/${this.props.hotel}`)
	  .then(function (response) {
	    // handle success
	    // console.log(response.data);
	    const hotel = response.data[0];

	    self.setState({
				address: hotel.address,
				average_rating: hotel.average_rating,
				city: hotel.city,
				id: hotel.id,
				name: hotel.name,
				phone: hotel.phone,
				ranking: hotel.ranking,
				state: hotel.state,
				website: hotel.website
	    })
	  })
	  .catch(function (error) {
	    // handle error
	    console.log(error);
	  });

	}

	render() {
		const {address, average_rating, city, id, name, phone, ranking, state, website} = this.state;

		return (
			<div>
				<div id={style['masthead']}>
					<img src="img/Logo.png" id={style['logo']} alt="TravelTipster" />
					<div id={style['user-nav']}>
						<div id={style['user-nav-links']}>
							<div><a href="#"><img src="./img/portfolio.png" /><span>Trips</span></a></div>
							<div><a href="#"><img src="./img/chat.png" /><span>Inbox</span></a></div>
							<div><a href="#"><img src="./img/profile.png" /><span>Profile</span></a></div>
						</div>
						<form id={style['search']}>
							<input type="text" placeholder="Search" />
						</form>
					</div>
				</div>
				<nav id={style['global-nav']}>
					<ul>
						<li>
							<a href="#">Travel Feed: {city}</a>
							<div className={style['tray']}>
								<ul>
									<li><a href="#">{city} Tourism</a></li>
									<li><a href="#">{city} Hotels</a></li>
									<li><a href="#">{city} Bed and Breakfast</a></li>
									<li><a href="#">{city} Vacation Packages</a></li>
									<li><a href="#">{city} Vacation Rentals</a></li>
									<li><a href="#">Flights to {city}</a></li>
									<li><a href="#">{city} Restaurants</a></li>
									<li><a href="#">Things to Do in {city}</a></li>
									<li><a href="#">{city} Shopping</a></li>
									<li><a href="#">{city} Travel Forum</a></li>
									<li><a href="#">{city} Photos</a></li>
									<li><a href="#">{city} Map</a></li>
									<li><a href="#">{city} Travel Guide</a></li>
								</ul>
							</div>
						</li>
						<li id="global-nav-selected">
							<a href="#">Hotels</a>
							<div className={style['tray']}>
								<ul>
									<li><a href="#">All {city} Hotels</a></li>
									<li><a href="#">{city} Hotel Deals</a></li>
									<li><a href="#">Last Minute Hotel Deals in {city}</a></li>
									<li><a href="#">Hotels near {name}</a></li>
								</ul>
							</div>
						</li>
						<li>
							<a href="#">Things to Do</a>
							<div className={style['tray']}>
								<ul>
									<li><a href="#">All things to do in {city}</a></li>
									<li><a href="#">Things to do near {name}</a></li>
								</ul>
							</div>
						</li>
						<li>
							<a href="#">Restaurants</a>
							<div className={style['tray']}>
								<ul>
									<li><a href="#">All {city} Restaurants</a></li>
									<li><a href="#">Restaurants near {name}</a></li>
								</ul>
							</div>
						</li>
						<li>
							<a href="#">Flights</a>
						</li>
						<li>
							<a href="#">Vacation Rentals</a>
						</li>
						<li>
							<a href="#">Shopping</a>
						</li>
					</ul>
				</nav>
				<div id={style['hotel-basics']}>
					<h1>{name}</h1>
					<div id={style['rating-container']}>
						<span id={style['rating']}>
							<StarRating rating={this.state.average_rating} />
							{average_rating} average rating
						</span>
						<span id={style['ranking']}>#{ranking} of Hotels in {city}</span>
					</div>
					<div id={style['contact-container']}>
						<span id={style['address']}>{address}, {city} {state}</span>
						<span id={style['phone']}>{phone}</span>
						<span id={style['website']}><a href={website}>Visit Hotel Website</a></span>
 					</div>
				</div>
			</div>
		)
	}
}

export default Header;