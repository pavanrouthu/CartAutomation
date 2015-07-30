var uuid = require('uuid');
var utils = require('../utility/util.js');
var DomainSearchResultsPage = require('../PageObjects/DomainSearchResultsPage.js');

exports.addToCart = function(){
	var domainSearchResPage = new DomainSearchResultsPage();

		domainSearchResPage.addToCart();
		expect(browser.getCurrentUrl()).toContain('/cart/summary');

};
