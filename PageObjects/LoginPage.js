
var utils = require('../utility/util.js');

var LoginPage = function(){

    var uname = utils.getLocator('orderLogin','username');
    var pwd = utils.getLocator('orderLogin', 'password');
    var loginBtn = utils.getLocator('orderLogin','loginbtn');

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

};
module.exports = LoginPage