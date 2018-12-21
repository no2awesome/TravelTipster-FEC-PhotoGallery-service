var {hotels, images} = require('./data.js');
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'cupcake',
  database : 'hotels'
});
 
connection.connect();

hotels.forEach(hotel => {
	const {id, name, city, state, average_rating, ranking, address, phone, website} = hotel;
	connection.query(`INSERT INTO hotel VALUES (${id}, '${name}', '${city}', '${state}', '${average_rating}', '${ranking}', '${address}', '${phone}', '${website}')`, function (error, results, fields) {
	  if (error) throw error;
	  console.log(results);
	});
})

images.forEach(image => {
	const {id, hotel_id, title, url, author, date, category} = image;
	connection.query(`INSERT INTO image VALUES (${id}, ${hotel_id}, '${title}', '${url}', '${author}', '${date}', '${category}')`, function (error, results, fields) {
	  if (error) throw error;
	  console.log(results);
	});	
})
 
connection.end();

module.exports = connection;