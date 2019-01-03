const express = require('express')
const app = express()
const port = 3003
const path = require('path');

const db = require('../db');

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
	res.send('Hello World!')
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))