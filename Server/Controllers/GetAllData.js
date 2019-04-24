var MovieModel = require('../DB/db.js');

module.exports = function(req, res) {
	MovieModel.find(function(error, response) {
		if(!error) {
			res.send({response : response});
		}
	});
	
}