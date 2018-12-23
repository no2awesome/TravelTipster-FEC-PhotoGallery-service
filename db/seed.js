var data = require('./seed_data.js');
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'cupcake',
  database : 'hotels'
});
 
connection.connect();

// console.log(data);
console.log(data.data.hotels);

data.data.hotels.forEach(hotel => {
	const {name, address, city, state, average_rating, ranking, phone, website} = hotel;
	const values = "name, address, city, state, average_rating, ranking, phone, website";
	console.log(`INSERT INTO hotel(${values}) VALUES ("${name}", "${address}", "${city}", "${state}", "${average_rating}", ${ranking}, "${phone}", "${website}")`)
	connection.query(`INSERT INTO hotel(${values}) VALUES ("${name}", "${address}", "${city}", "${state}", "${average_rating}", ${ranking}, "${phone}", "${website}")`, function (error, results, fields) {
	  if (error) throw error;
	  console.log(results);
	});
})

data.data.images.forEach(image => {
	const {hotel_id, title, url, author, date, category} = image;
	const values = "hotel_id, title, url, author, date, category";
	console.log(`INSERT INTO image(${values}) VALUES (${hotel_id}, "${title}", "${url}", "${author}", "${date}", "${category}")`);
	connection.query(`INSERT INTO image(${values}) VALUES (${hotel_id}, "${title}", "${url}", "${author}", "${date}", "${category}")`, function (error, results, fields) {
	  if (error) throw error;
	  console.log(results);
	});	
})
 
connection.end();

module.exports = connection;