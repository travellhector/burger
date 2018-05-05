// connection to mysql from connection.js
var connection = require("./connection.js");

// selectAll()
// insertOne()
// updateOne()

var orm = {
    selectAll: function(req, res) {
      var queryString = "SELECT * FROM burgers";
      connection.query(queryString, function(err, data) {
        if (err) throw err;
        console.log(result);
        
        res.render("index", { burgers: data });
    },
    insertOne: function(inputVal) {
      var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
      console.log(queryString);
      connection.query(queryString, [inputVal], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    UpdateOne: function() {
      var queryString = "SELECT * FROM burgers WHERE  id=?";
  
      connection.query(
        queryString, [burgerID], function(err, result) {
          if (err) throw err;
          console.log(result);
        }
      );
    }
};
  
  module.exports = orm;