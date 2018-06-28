const MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
const url = "mongodb://localhost:27017/";
//take arg
const args = process.argv.slice(2);
console.log(args[0]);
console.log(args[1]);


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db(args[0]);
  dbo.createCollection(args[1], function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
