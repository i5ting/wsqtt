var mqtt = require('mqtt')

client = mqtt.createClient(1883, 'localhost');

client.subscribe('presence');
client.publish('presence', 'Hello mqtt');

client.on('message', function (topic, message) {
	console.log("topic:= "+topic);
  console.log("message:= "+ message);
});

client.end();