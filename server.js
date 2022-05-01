var mysql = require('mysql2')
const con = mysql.createConnection({
    host: "localhost", // host for connection
    port: 3306, // default port for mysql is 3306
    database: "scholarship", // database from which we want to connect out node application
    user: "root", // username of the mysql connection
    password: "Orchha@1234" // password of the mysql connectio
    });
    con.connect(function (err) {
        if(err){
            console.log(err);
            console.log("error occured while connecting");
        }
        else{
            console.log("connection created with Mysql successfully");
        }
     });
     con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM category where slno=3", function (err, result, fields) {
          if (err) throw err;
          console.log(result);
        });
      });
      