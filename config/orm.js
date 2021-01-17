var connection = require("../config/connections");

function createQmarks(num){
    var arr = [];
    for (var i = 0; i < num; i++){
        arr.push("?");
    }
    return arr.toString();
}


var orm = {
    insert: function(table, cols,values, cb){
        var dbQuery = "INSERT INTO " + table + " (" + cols.toString() + ") " + "VALUES (" + createQmarks(values.length) + ") ";

        connection.query(dbQuery, values, function (err,res){
            if(err){
                throw err;
            }
            cb(res);
        });
    }
    
};

module.exports = orm;