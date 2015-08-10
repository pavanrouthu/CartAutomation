var uuid = require('uuid');
var utils = require('../utility/util.js');
var LoginPage = require('../PageObjects/LoginPage.js');

exports.loginToAccount = function(user, pass){
	var login = new LoginPage();
	login.enterUsername(user);
	login.enterPassword(pass);
	login.submitLogin();
};
exports.createAccount = function(){
	var login = new LoginPage();
	login.createAccount();
};