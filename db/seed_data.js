var faker = require('faker');

var categories = ['View', 'Amenities', 'Dining', 'Room', 'Other'];

var Image = function(hotel_id) {
	this.hotel_id = hotel_id;
	this.title = faker.lorem.words();
	this.url = faker.image.imageUrl();
	this.date = faker.date.past().toString().slice(4, 15);
	this.author = faker.fake("{{name.firstName}} {{name.lastName}}");
	this.category = categories[Math.floor(Math.random() * 5)];
}


var Hotel = function(hotel_id) {
	this.id = hotel_id;
	this.name = faker.name.lastName() + ' Hotel';
	this.city = 'San Francisco';
	this.state = 'CA';
	this.average_rating = parseFloat((Math.random() * (5-3) + 3).toFixed(1));
	this.ranking = Math.floor(Math.random() * 100);
	this.address = faker.address.streetAddress();
	this.phone = faker.phone.phoneNumberFormat();
	this.website = faker.internet.url();
}

var generateHotels = function() {
	var data = {
		hotels: [],
		images: []
	}

	for (var hotel_id = 1; hotel_id <= 50; hotel_id ++) {
		var hotel = new Hotel(hotel_id);
		data.hotels.push(hotel);

		for (var image_id = 1; image_id <= 20; image_id++) {
			var image = new Image(hotel_id);
			data.images.push(image);
		}
	}

	return data;
}

var data = generateHotels();

module.exports = {
	data
};