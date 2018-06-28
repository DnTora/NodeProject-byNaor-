const userLogger = (req,res,next) => {
	console.log("user"+ req.params.id + "is now connected");
	next();
};
  module.exports = userLogger;