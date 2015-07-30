
var utils = require('../utility/util.js');

var DomainSearchResultsPage = function(){
  var domRes = utils.getLocator('domainsearchresults','domAvail');
  var resBtn = utils.getLocator('domainsearchresults','resultsBtn');
  
  this.domainAvailabilityCheck = function(){
    return domRes.getText();
  };

  this.addToCart = function(){
    resBtn.click();
    browser.waitForAngular();
  };

};
module.exports = DomainSearchResultsPage