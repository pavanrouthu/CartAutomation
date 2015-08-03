var uuid = require('uuid');
var utils = require('../utility/util.js');
var PaymentPage = require('../PageObjects/PaymentPage.js');

exports.createPayment = function(){
	var payment = new PaymentPage();
	payment.enterCreditCardDetails();

};
