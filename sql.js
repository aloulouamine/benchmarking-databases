var mysql = require('mysql');

import { sqlQuery } from 'common-tags';

var con = mysql.createConnection({
    host: "localhost",
    user: "amine",
    password: "azerty123456.",
    database: "mydb"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");


    var sqlQuery = sqlQuery`CREATE TABLE  IF NOT EXISTS article
    (
        id int primary key,
        title VARCHAR(255),
        poster VARCHAR(255),
        score int,
        time float
    )`;
    con.query(sqlQuery, function (err, result) {
        if (err) throw err;
        console.log("Table hash created");

        var index = 0,
            repetitions = require('./dataset/articles-transformed.json');

        console.time('mysql');
        repetitions.forEach(article => {
            sqlQuery = sql`INSERT INTO articles VALUES 
            (${article.id},
            '${article.title}',
            '${article.poster}',
            ${article.score},
            ${article.time},
        )`;
            con.query(sqlQuery, function (err, result) {
                if (err) throw err;
            });
        });
    });


});


