const mysql = require('mysql');
const mysqlConfig = require('./config.js');

// const connection = mysql.createConnection(mysqlConfig);


const getHotelInfo = function(hotel_id, callback) {

  mysqlConfig.query(`SELECT * FROM hotel WHERE id = ${hotel_id}`, function(err, results) {
  	if (err) {
  		throw err;
  	}

  	callback(results);
  })

  // connection.end();
}

const getPhotos = function(hotel_id, callback) {

  mysqlConfig.query(`SELECT * FROM hotel LEFT JOIN image ON image.hotel_id = hotel.id WHERE hotel.id = 18`, function(err, results) {
  	if (err) {
  		throw err;
  	}
    console.log('results: ', results)
  	callback(results);
  })

  // connection.end();
}

module.exports = {
  getHotelInfo,
  getPhotos
};