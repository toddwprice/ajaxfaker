var Restify = require('restify');
var moment = require("moment");
 
/*==========================================================*/
//START UP SERVER
var server = Restify.createServer();

server.use(Restify.CORS());
server.use(Restify.acceptParser(server.acceptable));
server.use(Restify.authorizationParser());
server.use(Restify.dateParser());
server.use(Restify.queryParser());
server.use(Restify.jsonp());
server.use(Restify.gzipResponse());
server.use(Restify.bodyParser());

//log requests in console
server.use(function(req, res, next) {
	console.log(req.method + req.url);
	console.log("    " + JSON.stringify(req.params));
	next();
});

// INDEX ROUTE
server.get('/', function(req, res, next) {
	var wait = parseInt(Math.random() * 4 * 1000);	//up to 4 second delay
	var data = {
		waitMs: wait,
		currentTime: moment().format('lll')
	}
	setTimeout(function() {
		res.send(200, data)
	}, wait);
});


var port = process.env.PORT || 3000;
server.listen(port, function() {
  console.log('listening on PORT ' + port);
});