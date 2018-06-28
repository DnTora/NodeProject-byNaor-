
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

  module.exports =  (dbName,collectionName,data) => {
	 
	     MongoClient.connect(url, (err,db) => {
			 if(err) throw err;
			 let dbo = db.db(dbName);
			 dbo.collection(collectionName).insertOne(data , (err ,res) => {
				 if(err) throw err;
				 console.log("The data insert into the Database!!!");
				 db.close();
			 });
			 
			 
		 });
  }
