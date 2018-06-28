const MongoClient = require('mongodb').MongoClient,
      url = "mongodb://localhost:27017/";
	  
	 module.exports = (dbName,collectionName,data) => { MongoClient.connect(url, (err,db) => {
		   if(err) throw err;
		   let dbo = db.db(dbName);
		   dbo.collection(collectionName).find(data).limit(1).toArray( (err,result) => {
			    if (err) throw err;
                  if(result[0] == null)
					  console.log("empty");
				  else console.log(result)
                  db.close();
		   });
	   });
	};