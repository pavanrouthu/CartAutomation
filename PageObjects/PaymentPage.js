
var utils = require('../utility/util.js');

var PaymentPage = function(){

    this.enterCreditCardDetails = function(ccno, ccv, ccname){
          var ccnumber = utils.getLocator('orderpayment','ccno');
          var cvv = utils.getLocator('orderpayment', 'ccv');

          var ccmnth = utils.getLocator('orderpayment','ccmonth');
          var ccyear = utils.getLocator('orderpayment', 'ccyr');

          var creditrcardname = utils.getLocator('orderpayment','ccname');
          var paymentbutton = utils.getLocator('orderpayment', 'paymentbtn');

          var renewfirstname = utils.getLocator('orderpayment', 'contactfirstname');
          var renewlastname = utils.getLocator('orderpayment', 'contactlastname');
          var renewemail = utils.getLocator('orderpayment', 'contactemail');          


          renewfirstname.isDisplayed().then(function (isVisible) {
            if (isVisible) {
              renewfirstname.sendKeys("QA");
              renewlastname.sendKeys("Dept");
              renewemail.sendKeys("testing@melbourneit.com.au");
            } 
          });

   
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