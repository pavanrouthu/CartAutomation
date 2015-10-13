
var utils = require('../utility/util.js');

var ThankYouPage = function(){

    this.verifyOrderDetails = function(){

        var ordercomplete = utils.getLocator('orderconf','ordercomplete');
        var oid = utils.getLocator('orderconf', 'orderid');
        var domName = utils.getLocator('orderconf', 'orderdomain');
          //assert results on order confirmation
          expect(ordercomplete.getText()).toBe("Order Complete");
  
          domName.getText().then(function(domainname){
            console.log(domainname);
          });
          //This fetches the order id from the order confirmation page
          oid.getText().then(function(order) {
          console.log(order);
          });


    };


};
module.exports = ThankYouPage