var express = require('express');
var router = express.Router();

// Get Register
router.get('/register', function(req, res){
	res.render('register');
});
// Get Login
router.get('/login',function(req, res){
	res.render('login');
});

// Post Register
router.post('/register', function(req, res){
	var name = req.body.name;
	var email = req.body.email;
	var username = req.body.username;
	var password = req.body.password;
	var password2 = req.body.password2;
	var errors = req.validationErrors();

	if(errors){
		res.render('register',{
			errors:errors
		});
	} else {
		var newUser = new User({
			name: name,
			email:email,
			username: username,
			password: password
		});

	}
});


module.exports = router;