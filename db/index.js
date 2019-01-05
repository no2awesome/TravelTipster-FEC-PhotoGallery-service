const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);


const getHotelInfo = function(hotel_id, callback) {
  connection.query(`SELECT * FROM hotel WHERE id = ${hotel_id}`, function(err, results) {
  	if (err) {
  		throw err;
  	}

  	callback(results);
  })
}

const getPhotos = function(hotel_id, callback) {
  connection.query(`SELECT hotel_id, title, author, url, date, category FROM hotel LEFT JOIN image ON image.hotel_id = hotel.id WHERE hotel.id = ${hotel_id}`, function(err, results) {
  	if (err) {
  		throw err;
  	}
    console.log('results: ', results)
  	callback(results);
  })
}

module.exports = {
  getHotelInfo,
  getPhotos
};