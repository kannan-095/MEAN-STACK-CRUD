var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000; 
var routes = require('./Server/routes');

var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(express.static(__dirname + '/Client'));
routes(app);
app.listen(PORT, function()
  {
   console.log("connected to PORT-",PORT);
   });

