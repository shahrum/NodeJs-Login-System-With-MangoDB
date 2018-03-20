var express = require('express');
var router = express.Router();

// Get Register
router.get('/register', ensureAuthenticated, function(req, res){
	res.render('register');
});
// Get Login
router.get('/login', ensureAuthenticated, function(req, res){
	res.render('login');
});


module.exports = router;