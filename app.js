var express = require("express");
var moment = require("moment");
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
	var wait = parseInt(Math.random() * 4 * 1000);	//up to 4 second delay
	var data = {
		waitMs: wait,
		currentTime: moment().format('lll')
	}
	setTimeout(function() {
		response.send(data);
	}, wait);
});

var port = process.env.PORT || 5656;
app.listen(port, function() {
  console.log("Listening on " + port);
});