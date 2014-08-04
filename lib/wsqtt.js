var Wsqtt = {
	
	'startServer': function(){
		
		console.log('start server');
	
		var WebSocketServer = require('ws').Server
		  , wss = new WebSocketServer({port: 8080});
		
			console.log();
			wss.on('connection', function(ws) {
			    ws.on('message', function(message) {
			        console.log('received: %s', message);
			    });
			    ws.send('something');
			});
		
			wss.on('close', function() {
		    console.log('stopping client interval');
		  })
			
	}
	
	
}

Wsqtt.cli = require("./cli");

module.exports = Wsqtt;