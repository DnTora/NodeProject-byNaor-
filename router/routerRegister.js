const express = require('express');
const router  = express.Router();
const registerLogger = require('./routerLoggers/registerLogger');

 router.use(registerLogger);

 
 router.get('/register' , (req,res)=> {
          res.send("work");
});
	 
 
  module.exports = router;