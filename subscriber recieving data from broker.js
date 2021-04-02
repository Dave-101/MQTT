var mqtt = require("mqtt");
// var client = mqtt.connect("mqtt://test.mosquitto.org");
const brokerURL = "mqtt://mqtt.distronix.in";
const options = {
    username: "distronix",
    password: "distronix",
    keepalive: 0,
    clean: false,
    reconnectPeriod: 1000,
    clientId: "mqttjs_" + Math.random().toString(16).substr(2, 8),
};
const client = mqtt.connect(brokerURL, options)

client.on("connect", (err) => {
    if (!err) {
        console.log("No error!!!");
    }
    console.log("Is subscriber ready to recieve? " + client.connected);
})

client.subscribe("#", function (err) {
    if (err) {
        console, log("Error while getting the data..." + JSON.stringify(err));
    }
})

client.on("message", function (topic, message) {
    // message is Buffer
    console.log("Topic: ", topic);
    console.log("Message:", message.toString());
    //client.end();
});