var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "amine",
    password: "azerty123456.",
    database: "mydb"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    var sql = "CREATE TABLE IF NOT EXISTS hash (mykey VARCHAR(255), value VARCHAR(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table hash created");

        var index = 0,
            repetitions = 1000;

        console.time('mysql');

        while (index <= repetitions) {
            sql = `INSERT INTO hash VALUES ('key${index}','value${index}')`;
            console.log(sql);
            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log(result);
                if (index === repetitions) {
                    console.timeEnd('mysql');
                }
            });
            index++;
        }
    });


});


