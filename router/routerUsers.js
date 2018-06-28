const express = require('express');
const router = express.Router();
const userLogger = require('./routerLoggers/userLogger');

 
   router.use('/:id',userLogger);
   router.get('/:id', (req,res) => {
	       res.send("The User" + req.params.id + "is connect right now");
   });
   
   module.exports = router;