import React from 'react';

class Header extends React.Component {
	constructor() {
		super();
	}

	render() {

		var city = "San Francisco";
		var hotel = "Omni Hotel";
		var avgrat = "4.5";
		var ranking = "3";
		var total = "100";

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
									<li><a href="#">Hotels near {hotel}</a></li>
								</ul>
							</div>
						</li>
						<li>
							<a href="#">Things to Do</a>
							<div className="tray">
								<ul>
									<li><a href="#">All things to do in {city}</a></li>
									<li><a href="#">Things to do near {hotel}</a></li>
								</ul>
							</div>
						</li>
						<li>
							<a href="#">Restaurants</a>
							<div className="tray">
								<ul>
									<li><a href="#">All {city} Restaurants</a></li>
									<li><a href="#">Restaurants near {hotel}</a></li>
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
					<h1>{hotel}</h1>
					<div id="rating-container">
						<span id="rating">{avgrat} average rating</span>
						<span>#{ranking} of {total} Hotels in {city}</span>
					</div>
					<div id="contact-container">
						<span id="address">91702 Heathcote Branch, {city} CA</span>
						<span id="phone">818-726-5064</span>
						<span id="website"><a href="#">Visit Hotel Website</a></span>
 					</div>
				</div>
			</div>
		)
	}
}

export default Header;