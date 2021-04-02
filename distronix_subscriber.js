var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://test.mosquitto.org");

client.on("connect", (err) => {
    if(!err){
        console.log("No error!!!");
    }
    console.log("Is subscriber ready to recieve?" + client.connected);
})

client.subscribe(["dist/+/+/+/diag", "Date"], function (err){
    if(err){
        console,log("Error while getting the data..." + JSON.stringify(err));
    }
})

client.on("message", function (topic, message) {
    // message is Buffer
      
      console.log("topic:", topic);
      console.log("Message:", message.toString());
    //client.end();
});