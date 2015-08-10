var uuid = require('uuid');
var utils = require('../utility/util.js');
var PaymentPage = require('../PageObjects/PaymentPage.js');

exports.createPayment = function(ccno, ccv, ccname){
	var payment = new PaymentPage();
	payment.enterCreditCardDetails(ccno, ccv, ccname);

};
