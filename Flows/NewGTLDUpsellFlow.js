var uuid = require('uuid');
var utils = require('../utility/util.js');
var UpsellPage = require('../PageObjects/UpsellPage.js');


exports.NewGTLDUpsellFlow = function(){
	var upsellPage = new UpsellPage();

        upsellPage.newgtldupsell();

};

// exports.addToCart = function(){
// 	var domainSearchResPage = new DomainSearchResultsPage();

// 		domainSearchResPage.addToCart();
// 		expect(browser.getCurrentUrl()).toContain('/cart/summary');

// };
