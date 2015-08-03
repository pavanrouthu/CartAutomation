var uuid = require('uuid');
var utils = require('../utility/util.js');
var LoginPage = require('../PageObjects/LoginPage.js');

exports.loginToAccount = function(){
	var login = new LoginPage();
	login.enterUsername('testextote33');
	login.enterPassword('password');
	login.submitLogin();
};
exports.createAccount = function(){
	var login = new LoginPage();
	login.createAccount();
};