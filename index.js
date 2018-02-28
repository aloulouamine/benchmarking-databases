var redis = require("redis"),
    client = redis.createClient();

// if you'd like to select database 3, instead of 0 (default), call
// client.select(3, function() { /* ... */ });

client.on("error", function (err) {
    console.log("Error " + err);
});

var index = 0;
console.time('Insertion');
while (index < 1000000) {
    client.del(`key ${index}`);
    index ++;
}
console.timeEnd('Insertion');

client.quit();