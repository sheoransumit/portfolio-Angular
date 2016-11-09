// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({ service: 'Gmail', auth: { user: 'op.sumitsheoran@gmail.com', pass: '' } });

// var cors = require('cors');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)

router.route('/')

    .post(function(req, res) {

    	var data = req.body;
    	console.log(data);
		// setup e-mail data with unicode symbols
		var mailOptions = {
			name: data.name,
		    from: data.email, // sender address
		    to: 'op.sumitsheoran@gmail.com', // list of receivers
		    subject: 'Portfolio ', // Subject line
		    text: 'Name:' + data.name + ',E-mail:' + data.email + ',Message:' + data.message
		};

		// send mail with defined transport object
		transporter.sendMail(mailOptions, function(error, info){
		    if(error){
		        return console.log(error);
		    }
		    console.log('Message sent: ' + info.response);
		});
    });



// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);
// app.use(function(req, res) {
//   // Use res.sendfile, as it streams instead of reading the file into memory.
//   res.sendfile('./app/index.html');
// });
app.use(express.static('./app'));
//add this so the browser can GET the bower files
app.use('/bower_components', express.static('./bower_components'));

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
