
// var uuid = require('uuid');
var utils = require('../utility/util.js');

var RenewPage = function(){
  browser.waitForAngular();
  var renewSearch = utils.getLocator('renewdomain','renewsearch');
  var domBtn = utils.getLocator('renewdomain','renewBtn');

  this.renewDomain = function(dom){
    //console.log('Renew domain: '+dom);
    renewSearch.sendKeys(dom);
    domBtn.click();
    browser.waitForAngular();
  };  
};
module.exports = RenewPage