const express = require('express');
const router = require('./router/router');
const routerRegister = require('./router/routerRegister');
const routerUsers = require('./router/routerUsers');
const app = express();
const bodyParser = require('body-parser');




app.listen(80,() => {
	console.log("Listening on port 80 !!!");
});


app.set('view engine', 'ejs');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/',router);
app.use('/user',routerUsers);





// שגיאות 404/500 אשר בודק ומודיע לעשות דף מסודר בעתיד לכל אחד

//500 Middleware
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
  
});

//The 404 Route (ALWAYS Keep this as the last route).
app.get('*', (req,res) => {
	res.send('404 page',404);
});