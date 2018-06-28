const MyLogger = (req,res,next) => {
	console.log("Some one Join Now: " + Date.now());
	next();
}
  module.exports = MyLogger;