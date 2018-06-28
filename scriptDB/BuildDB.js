const MongoClient = require('mongodb').MongoClient;
const args = process.argv.slice(2);
const url = "mongodb://localhost:27017/" + args[0];
 
  MongoClient.connect(url , (err,db) => {
	  if(err) throw err;
	  console.log("Database Created!!!");
	  db.close();
  });