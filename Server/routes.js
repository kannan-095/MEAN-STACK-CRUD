var getAllDataCntrl = require('../Server/Controllers/GetAllData.js');
var saveCntrl = require('../Server/Controllers/SaveData.js');
module.exports = function route(app) {
	app.get('/movies', getAllDataCntrl);
	app.post('/saveData', saveCntrl);
}