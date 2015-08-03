var uuid = require('uuid');
var utils = require('../utility/util.js');
var ThankYouPage = require('../PageObjects/ThankYouPage.js');

exports.orderConfirmation = function(){
	var confirmation = new ThankYouPage();
	confirmation.verifyOrderDetails();

};
