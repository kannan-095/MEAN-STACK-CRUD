var MovieModel = require('../DB/db.js').Movie;

module.exports = function(req, res) {
	var movieModel = new MovieModel(req.body);
	var promise = movieModel.save();
	promise.then(function(response) {
		res.send(response);
	});
	
}