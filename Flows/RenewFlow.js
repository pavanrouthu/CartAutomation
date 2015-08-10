var RenewPage = require('../PageObjects/RenewPage.js');


exports.renewDomains = function(dom){
	var renewPage = new RenewPage();
		browser.get('/renew');
		browser.executeScript('window.localStorage.clear();');
		browser.executeScript('window.sessionStorage.clear();');
		browser.waitForAngular();
        renewPage.renewDomain(dom);

};
