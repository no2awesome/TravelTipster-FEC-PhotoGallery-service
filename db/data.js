var faker = require('faker');

var categories = ['View', 'Amenities', 'Dining', 'Room', 'Other'];

var Image = function(i, h) {
	this.id = i;
	this.hotel_id = h;
	this.title = faker.lorem.words();
	this.url = faker.image.imageUrl();
	this.date = faker.date.past().toString().slice(4, 15);
	this.author = faker.fake("{{name.firstName}} {{name.lastName}}");
	this.category = categories[Math.floor(Math.random() * 5)];
}


var Hotel = function(h) {
	this.id = h;
	this.name = faker.name.lastName() + ' Hotel';
	this.city = 'San Francisco';
	this.state = 'CA';
	this.average_rating = parseFloat((Math.random() * (5-3) + 3).toFixed(2));
	this.ranking = Math.floor(Math.random() * 100);
	this.address = faker.address.streetAddress();
	this.phone = faker.phone.phoneNumber();
	this.website = faker.internet.url();
}

var generateHotels = function() {
	var hotels = [];

	for (var h = 100; h <= 150; h++) {
		var hotel = new Hotel(h);
		hotels.push(hotel);
	}

	return hotels;
}

var generateImages = function() {
	var images = [];

	for (var h = 100; h <= 150; h++) {
		for (var i = 200; i <= 220; i++) {
			var image = new Image(i, h);
			images.push(image);
		}
	}

	// for (var h = 100; h <= 200; h++) {
	// 	for (var i = 200; i <= 220; i++) {
	// 		var image = new Image(i, h);
	// 		images.push(image);
	// 	}
	// }
	
	return images;
}

var hotels = generateHotels();
var images = generateImages();

module.exports = {
	hotels,
	images
};