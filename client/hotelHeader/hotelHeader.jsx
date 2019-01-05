import React from 'react';
import StarRating from './../starRating.jsx';
import axios from 'axios';

class Header extends React.Component {
	constructor() {
		super();
		this.state = {
			currentHotel: 18
		}
	}

	componentDidMount() {
		const self = this;
		// GET request
		axios.get(`/hotel/${this.state.currentHotel}`)
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
				<div id="masthead">
					<img src="img/Logo.png" id="logo" alt="TravelTipster" />
					<div id="user-nav">
						<div id="user-nav-links">
							<div><a href="#"><img src="./img/portfolio.svg" /><span>Trips</span></a></div>
							<div><a href="#"><img src="./img/chat.svg" /><span>Inbox</span></a></div>
							<div><a href="#"><img src="./img/profile.svg" /><span>Profile</span></a></div>
						</div>
						<form id="search">
							<input type="text" placeholder="Search" />
						</form>
					</div>
				</div>
				<nav id="global-nav">
					<ul>
						<li>
							<a href="#">Travel Feed: {city}</a>
							<div className="tray">
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
							<div className="tray">
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
							<div className="tray">
								<ul>
									<li><a href="#">All things to do in {city}</a></li>
									<li><a href="#">Things to do near {name}</a></li>
								</ul>
							</div>
						</li>
						<li>
							<a href="#">Restaurants</a>
							<div className="tray">
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
				<div id="hotel-basics">
					<h1>{name}</h1>
					<div id="rating-container">
						<span id="rating">
							<StarRating rating={this.state.average_rating} />
							{average_rating} average rating
						</span>
						<span id="ranking">#{ranking} of Hotels in {city}</span>
					</div>
					<div id="contact-container">
						<span id="address">{address}, {city} {state}</span>
						<span id="phone">{phone}</span>
						<span id="website"><a href={website}>Visit Hotel Website</a></span>
 					</div>
				</div>
			</div>
		)
	}
}

export default Header;