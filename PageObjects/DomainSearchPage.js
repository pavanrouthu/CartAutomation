
// var uuid = require('uuid');
var utils = require('../utility/util.js');

var DomainSearchPage = function(){
  browser.waitForAngular();
  var domSearch = utils.getLocator('domainsearchpage','domainName');
  var domBtn = utils.getLocator('domainsearchpage','searchBtn');
  var domRes = utils.getLocator('domainsearchresults','domAvail');

  this.enterDomain = function(dom){
    // var randStrg = uuid.v1();
    // global.dom = 'refactor' + randStrg + '.com';
    domSearch.sendKeys(dom);

  };
  
  this.searchDomain = function(){
    domBtn.click();
    browser.waitForAngular();
  };
  
  this.domainAvailabilityCheck = function(){
    return domRes.getText();
  };

};
module.exports = DomainSearchPage