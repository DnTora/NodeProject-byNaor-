const express = require('express'),
      router  = express.Router(),
      MyLogger = require('./routerLoggers/logger'),
      Insert = require('../scriptDB/InsertData'),
	  checkLogin = require('../scriptDB/checkLogin');


router.use(MyLogger);

router.get('/SignUp', (req,res) => {
	res.render('index', {header:"work finally" ,id:"register"});
});

 router.post('/SignUp' , (req,res,next)=> {
        let data  = {
			 userName: req.body.userName,
			 userEmail: req.body.userEmail,
			 userPassword: req.body.userPassword
		 };
		 Insert("myFirstProject","Users",data);
});
	router.post('/' , (req,res,next)=> {
        let data  = {
			 userName: req.body.userName,
			 userPassword: req.body.userPassword
		 };
		 	checkLogin("myFirstProject","Users",data);
		
}); 

router.get('/',(req,res) => {
	res.render('index', {header:"work finally", id:"login"});

});

 module.exports = router;