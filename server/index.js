const express = require('express')
const app = express()
const port = 3003
const path = require('path');
const bodyParser = require('body-parser');

const db = require('../db');

app.use(bodyParser.urlencoded())

app.use(express.static(path.join(__dirname, './../public')))

// GET basic info for a certain hotel
app.get('/hotel/:hotel_id', function(req, res) {

	db.getHotelInfo(
		req.params.hotel_id, 
		function(results) {
			res.send(results);
		}
	)
})

// GET photos from a certain hotel
app.get('/hotel/:hotel_id/photos', function(req, res) {
	console.log('app.get fires')

	// var hotel_id = req.params.hotel_id;
	var hotel_id = 1;

	db.getPhotos(
		hotel_id,
		function(results) {
			res.send(results);
		}
	)

	// res.send('Hello World!')
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))