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
module.exports = connection;