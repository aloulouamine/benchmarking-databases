var data = require('./dataset/articles.json');
var fs = require('fs');


data.forEach(article => {
    var date = new Date(article.time);
    article.time = date.getTime() / 1000;
});


fs.writeFile('./dataset/articles-transformed.json', JSON.stringify(data), 'utf-8', function () {
    console.log('file written.');
});