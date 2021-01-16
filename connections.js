const mysql = require("mysql");
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "password",
        database: "company_db"
    });

}
connection.connect((err) => {
    if (err) {
        console.log("error connecting to db");
        return;
    }
    console.log("connection established");
});

connection.query("SELECT * FROM department", (err, rows) => {
    if (err) throw err;
    console.log('Data received from Db:');
    console.log(rows);
});
module.exports = connection;