
var utils = require('../utility/util.js');

var LoginPage = function(){

  //This is for the Returning Customer
    var uname = utils.getLocator('orderLogin','existingusername');
    var pwd = utils.getLocator('orderLogin', 'existingpassword');
    var loginBtn = utils.getLocator('orderLogin','loginbtn');

  //This is for the New Customer
    var newcustomerBtn = utils.getLocator('orderLogin','newlogin');
    var firstname = utils.getLocator('orderLogin','firstname');
    var lastname = utils.getLocator('orderLogin','lastname');
    var organisation = utils.getLocator('orderLogin','organisation');
    var address = utils.getLocator('orderLogin','address');
    var country = utils.getLocator('orderLogin','country');
    var state = utils.getLocator('orderLogin','state');
    var suburb = utils.getLocator('orderLogin','suburb');
    var postcode = utils.getLocator('orderLogin','postcode');
    var phoneno = utils.getLocator('orderLogin','phoneno');
    var emailaddress = utils.getLocator('orderLogin','emailaddress');
    var username = utils.getLocator('orderLogin','username');
    var password = utils.getLocator('orderLogin','password');
    var submitCreateAccount = utils.getLocator('orderLogin','createaccountbtn');

    this.enterUsername = function(username){
      uname.sendKeys(username);
    };

    this.enterPassword = function(password){
      pwd.sendKeys(password);
    };

    this.submitLogin = function(){
      loginBtn.click();
      browser.waitForAngular();
    };

    this.createAccount = function(){
      newcustomerBtn.click();
      browser.waitForAngular();

      firstname.sendKeys('autouser');
      lastname.sendKeys('bot');
      organisation.sendKeys('Melbourne IT');
      address.sendKeys('469 Latrobe Street');
      country.click();
      state.click();
      suburb.sendKeys('Melbourne');
      postcode.sendKeys('3000');
      phoneno.sendKeys('+61.123456789');
      emailaddress.sendKeys('testing@melbourneit.com.au');

      var rand = Math.floor((Math.random() * 10000) + 1);;
      userinput = "autouser"+rand;
      //console.log(userinput);
      username.sendKeys(userinput);
      password.sendKeys('password');

      submitCreateAccount.click();
      browser.waitForAngular();
    };

};
module.exports = LoginPage