
var utils = require('../utility/util.js');

var PaymentPage = function(){

    this.enterCreditCardDetails = function(ccno, ccv, ccname){
          var ccnumber = utils.getLocator('orderpayment','ccno');
          var cvv = utils.getLocator('orderpayment', 'ccv');

          var ccmnth = utils.getLocator('orderpayment','ccmonth');
          var ccyear = utils.getLocator('orderpayment', 'ccyr');

          var creditrcardname = utils.getLocator('orderpayment','ccname');
          var paymentbutton = utils.getLocator('orderpayment', 'paymentbtn');


    
          ccnumber.sendKeys(ccno);
          cvv.sendKeys(ccv);
          ccmnth.click();
          ccyear.click();
          creditrcardname.sendKeys(ccname);
          paymentbutton.click();
          browser.driver.sleep(120);
          browser.waitForAngular();

    };


};
module.exports = PaymentPage