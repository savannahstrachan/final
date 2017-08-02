var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports  = mongoose.model('alumni', RSchema);

var ASchema = new mongoose.Schema ({
	firstName: String,
	lastName: String,
	year: Number,
	emailAddress: String,	
	ID: Number
},{ collection: "Alumni"}
);

console.log ('mongo connected')