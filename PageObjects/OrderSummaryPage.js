
var utils = require('../utility/util.js');

var OrderSummaryPage = function(){
  var productItem = utils.getLocator('ordersummary','item');
  var summarybtn = utils.getLocator('ordersummary','summarybtn');
  
  this.productCheck = function(){
    return productItem.getText();
  };

  this.changePrice = function(yr){
	var priceoption = element(by.cssContainingText('option', yr));

		  
	priceoption.isPresent().then(function(result){
    console.log(result);
		if (result){
			priceoption.click();
      browser.waitForAngular();
		}
	});
    //browser.waitForAngular();
  };

  this.clickContinueOnSummary = function(){
    summarybtn.click();
    browser.waitForAngular();
  };


};
module.exports = OrderSummaryPage