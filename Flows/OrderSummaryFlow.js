var uuid = require('uuid');
var utils = require('../utility/util.js');
var DomainSearchPage = require('../PageObjects/DomainSearchPage.js');
var OrderSummaryPage = require('../PageObjects/OrderSummaryPage.js');


exports.validateProduct = function(){
	var orderSummPage = new OrderSummaryPage();
	var productName = global.genericdomain;
	expect(orderSummPage.productCheck()).toEqual(productName);
};

exports.priceChange = function(yr){
	var orderSummPage = new OrderSummaryPage();
	orderSummPage.changePrice(yr);
};

exports.submitSummaryPage = function(){
	var orderSummPage = new OrderSummaryPage();
	orderSummPage.clickContinueOnSummary();
};