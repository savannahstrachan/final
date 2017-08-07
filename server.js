// modules =================================================
var express        = require('express')
var app            = express()
var mongoose       = require('mongoose')
var bodyParser     = require('body-parser')
var methodOverride = require('method-override')
var port = process.env.PORT || 8080;


// configuration ===========================================
	
// config files
var db = require('./config/db')

mongoose.connect('mongodb://heroku_5lc533c5:vlfo62l9j2jlno0i17tgi43rdc@ds119772.mlab.com:19772/heroku_5lc533c5', function(error){

	console.log ('mongo connected here too!');
	
if (error) console.error (error);
else console.log ('mongo connected');

});

console.log ('anything')

// mongoose.connect(db.url); // connect to our mongoDB database (commented out after you enter in your own credentials)

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// routes ==================================================
require('./api/routes')(app); // pass our application into our routes

// start app ===============================================
 // set our port
app.listen(process.env.PORT || 5000, function(err) {  // this is changed-- Heroku knows what
	// to put in there. fallback is whatever is past ||.
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`Magic is happening on ${process.env.PORT}`)
})


var ASchema = new mongoose.Schema ({
	firstName: String,
	lastName: String,
	emailAddress: String,
	phone: Number,
	streetAddress: String,
	city: String,
	state: String,
	zipCode: Number,
	codeSkill: Number,
	describe: Number,
	link: String,
	projectDesc: String,
	ID: Number,
},{ collection: "application"}
);



var Application = mongoose.model('application', ASchema);

app.post('/add-app', function (req, res){
	console.log("/app endpoint getting hit");
	
	var application = new Application(req.body);

	application.save(function(err){
		console.log(application);
		
			})
});

var CSchema = new mongoose.Schema ({
	firstName: String,
	lastName: String,
	emailAddress: String,
	phone: Number,
	codeSkill: Number,
	describe: Number,
	link: String,
	projectDesc: String,
	ID: Number,
},{ collection: "contact"}
);



var Contact = mongoose.model('contact', CSchema);

app.post('/add-contact', function (req, res){
	console.log("/contact endpoint getting hit");
	
	var contact = new Contact(req.body);

	contact.save(function(err){
		console.log(contact);
		
			})
});





exports = module.exports = app; 			