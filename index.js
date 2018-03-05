var data = require('./dataset/articles-transformed.json');
var redis = require("redis"),
    client = redis.createClient();

client.on("error", function (err) {
    console.log("Error " + err);
});

var index = 0;
console.time('Insertion');

data.forEach(article => {
    client.HSET(`article:${article.index}`, 'title', article.title);
    client.HSET(`article:${article.index}`, 'link', article.link);
    client.HSET(`article:${article.index}`, 'poster', article.poster);
    client.HSET(`article:${article.index}`, 'time', article.time);
    client.HSET(`article:${article.index}`, 'score', article.score);
});
console.timeEnd('Insertion');

client.quit();