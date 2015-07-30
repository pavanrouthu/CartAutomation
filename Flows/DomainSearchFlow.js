var uuid = require('uuid');
var utils = require('../utility/util.js');
var DomainSearchPage = require('../PageObjects/DomainSearchPage.js');
var DomainSearchResultsPage = require('../PageObjects/DomainSearchResultsPage.js');


exports.DomainSearchFlow = function(){
	var domainSearchPage = new DomainSearchPage();
	var domainSearchResultsPage = new DomainSearchResultsPage();

        domainSearchPage.enterDomain();

        domainSearchPage.searchDomain();

        expect(domainSearchResultsPage.domainAvailabilityCheck()).toEqual('is available');

};

// exports.addToCart = function(){
// 	var domainSearchResPage = new DomainSearchResultsPage();

// 		domainSearchResPage.addToCart();
// 		expect(browser.getCurrentUrl()).toContain('/cart/summary');

// };
