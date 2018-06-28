const registerLogger = (req,res,next) => {
	console.log("some one register now!!!");
	next();
};
  module.exports = registerLogger;