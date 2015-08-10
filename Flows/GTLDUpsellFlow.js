var uuid = require('uuid');
var utils = require('../utility/util.js');
var UpsellPage = require('../PageObjects/UpsellPage.js');


exports.GTLDUpsellFlow = function(){
	var upsellPage = new UpsellPage();

        upsellPage.gtldupsell();

};

// exports.addToCart = function(){
// 	var domainSearchResPage = new DomainSearchResultsPage();

// 		domainSearchResPage.addToCart();
// 		expect(browser.getCurrentUrl()).toContain('/cart/summary');

// };
