import React from 'react';

class Header extends React.Component {
	constructor() {
		super();
	}

	render() {

		var city = "San Francisco"

		return (
			<div>
				<div id="masthead">
					<img src="img/Logo.png" id="logo" alt="TravelTipster" />
					<div id="user-nav">
						<div id="user-nav-links">
							<div><a href="#"><img src="./img/portfolio.svg" />Trips</a></div>
							<div><a href="#"><img src="./img/chat.svg" />Inbox</a></div>
							<div><a href="#"><img src="./img/profile.svg" />Profile</a></div>
						</div>
						<form id="search">
							<input type="text" placeholder="Search" />
						</form>
					</div>
				</div>
				<nav id="global-nav">
					<a href="#">Travel Feed: {city}</a>
					<a href="#">Hotels</a>
					<a href="#">Things to Do</a>
					<a href="#">Restaurants</a>
					<a href="#">Flights</a>
					<a href="#">Vacation Rentals</a>
					<a href="#">Shopping</a>
				</nav>
			</div>
		)
	}
}

export default Header;