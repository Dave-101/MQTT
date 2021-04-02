var mqtt = require("mqtt");
var client = mqtt.connect("mqtt://test.mosquitto.org");

client.on("connect", (err) => {
    if(err){
        console.log("Client connection " + client.connected);
    }
});

client.on("error", (err) => {
    console.log("Message:" + err);
})

//Publishing values for dist/nkda/vts/data/sens

setInterval(() => {
    client.publish("dist/nkda/vts/data/sens", "value1");
    console.log("Data published for dist/nkda/vts/data/sens");
}, 5000);

//Publishing values for dist/nkda/vts/data/diag

setInterval(() => {
    client.publish("dist/nkda/vts/data/diag", "value2");
    console.log("Data published for dist/nkda/vts/data/diag");
}, 5000);

//Publishing values for dist/nkda/tfs/data/sens

setInterval(() => {
    client.publish("dist/nkda/tfs/data/sens", "value3");
    console.log("Data published for dist/nkda/tfs/data/sens");
}, 5000);

//Publishing values for dist/nkda/tfs/data/diag

setInterval(() => {
    client.publish("dist/nkda/tfs/data/diag", "value4");
    console.log("Data published for dist/nkda/tfs/data/diag");
}, 5000);

//Publishing values for dist/nkda/nsp/data/sens

setInterval(() => {
    client.publish("dist/nkda/nsp/data/sens", "value6");
    console.log("Data published for dist/nkda/nsp/data/sens");
}, 5000);

//Publishing values for dist/nkda/nsp/data/diag

setInterval(() => {
    client.publish("dist/nkda/nsp/data/diag", "value7");
    console.log("Data published for dist/nkda/nsp/data/diag");
}, 5000);



//Publishing values for dist/berger/vts/data/sens

setInterval(() => {
    client.publish("dist/berger/vts/data/sens", "value8");
    console.log("Data published for dist/nkda/vts/data/sens");
}, 5000);

//Publishing values for dist/berger/vts/data/diag

setInterval(() => {
    client.publish("dist/berger/vts/data/diag", "value9");
    console.log("Data published for dist/nkda/vts/data/diag");
}, 5000);

//Publishing values for dist/berger/xph/data/sens

setInterval(() => {
    client.publish("dist/berger/xph/data/sens", "value10");
    console.log("Data published for dist/nkda/xph/data/sens");
}, 5000);

//Publishing values for dist/berger/xph/data/diag

setInterval(() => {
    client.publish("dist/berger/xph/data/diag", "value11");
    console.log("Data published for dist/nkda/xph/data/diag");
}, 5000);

//Publishing values for dist/data/diag

setInterval(() => {
    client.publish("dist/data/diag", "value12");
    console.log("Data published for dist/data/diag");
}, 5000);

//Publishing values for dist/data/diag

setInterval(() => {
    client.publish("dist/data/diag", "value12");
    console.log("Data published for dist/data/diag");
}, 5000);

setInterval(() => {
    client.publish("Date", Date.now().toString());
    console.log("Date");
}, 5000);
  