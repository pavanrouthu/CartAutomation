
var uuid = require('uuid');
var utils = require('../utility/util.js');

var UpsellPage = function(){

  this.gtldupsell = function(){

  //This goes through the first upsell page
        var firstBtn = element.all(By.css('button.btn.red')).first();
        firstBtn.click();
        browser.waitForAngular();

  //This goes through the second upsell page
    browser.driver.executeScript('return window.sessionStorage.getItem("optHosting");').then(function(sessionvalue){
      //console.log(sessionvalue);

      if (sessionvalue == '"cloud-hosting"'){
        var cloudCheckbox = $('form[name="cloudHostingForm"] .checkbox-list input[name="domain"]');
        cloudCheckbox.click();
        
        var cloudBtn = $('form[name="cloudHostingForm"] button.btn.red');
        cloudBtn.click();
        browser.waitForAngular();
      }
      else if (sessionvalue == '"cpanel-hosting"'){
        var cpanelBtn = $('form[name="cpanelHostingForm"] button.btn.red');
        cpanelBtn.click();
        browser.waitForAngular();
      }
    });

    //This goes through the third upsell page
        var thirdBtn = $('form[name="sitelockForm"] button.btn.red');
        thirdBtn.click();
        browser.waitForAngular();

  };

  this.newgtldupsell = function(){
    
      //This goes through the second upsell page
      browser.driver.executeScript('return window.sessionStorage.getItem("optHosting");').then(function(sessionvalue){
      //console.log(sessionvalue);

      if (sessionvalue == '"cloud-hosting"'){
        var cloudCheckbox = $('form[name="cloudHostingForm"] .checkbox-list input[name="domain"]');
        cloudCheckbox.click();
        
        var cloudBtn = $('form[name="cloudHostingForm"] button.btn.red');
        cloudBtn.click();
        browser.waitForAngular();
      }
      else if (sessionvalue == '"cpanel-hosting"'){
        var cpanelCheckbox = $('form[name="cpanelHostingForm"] .checkbox-list input[name="domain"]');
        cpanelCheckbox.click();

        var cpanelBtn = $('form[name="cpanelHostingForm"] button.btn.red');
        cpanelBtn.click();
        browser.waitForAngular();
      }
    });

    //This goes through the third upsell page
        var thirdBtn = $('form[name="sitelockForm"] button.btn.red');
        thirdBtn.click();
        browser.waitForAngular();
  }; 

  this.cctldupsell = function(){
    
      //This goes through the second upsell page
      browser.driver.executeScript('return window.sessionStorage.getItem("optHosting");').then(function(sessionvalue){
      //console.log(sessionvalue);

      if (sessionvalue == '"cloud-hosting"'){
        var cloudCheckbox = $('form[name="cloudHostingForm"] .checkbox-list input[name="domain"]');
        cloudCheckbox.click();
        
        var cloudBtn = $('form[name="cloudHostingForm"] button.btn.red');
        cloudBtn.click();
        browser.waitForAngular();
      }
      else if (sessionvalue == '"cpanel-hosting"'){
        var cpanelBtn = $('form[name="cpanelHostingForm"] button.btn.red');
        cpanelBtn.click();
        browser.waitForAngular();
      }
    });

    //This goes through the third upsell page
        var thirdBtn = $('form[name="sitelockForm"] button.btn.red');
        thirdBtn.click();
        browser.waitForAngular();
  }; 

    this.renewupsell = function(){

        //var renewupsellform = $('form[name="privateRegistrationForm"]');
        //$('form[name="privateRegistrationForm"] button.btn.red');
        // renewupsellform.isDisplayed().then(function (isVisible) {
        //   if (isVisible) {
        //     var privateregBtn = $('form[name="privateRegistrationForm"] button.btn.red');
        //     privateregBtn.click();
        //     browser.waitForAngular();

        //     var protectBtn = $('form[name="domainProtectionForm"] button.btn.red');
        //     protectBtn.click();
        //     browser.waitForAngular();
        //   }
        //   else {
        //     browser.waitForAngular();
        //     var protectBtn = $('form[name="domainProtectionForm"] button.btn.red');
        //     protectBtn.click();
            
        //     browser.waitForAngular();

        //     //This goes through the third upsell page
        //     var secondBtn = $('form[name="renewForm"] button.btn.red');
        //     secondBtn.click();
        //     browser.waitForAngular();
        //   }
        // });

        //if (expect(renewupsellform.isDisplayed()).toBe(true)) {
            var privateregBtn = element.all(By.css('button.btn.red')).first();
            privateregBtn.click();
            browser.waitForAngular();

            var protectBtn = element.all(By.xpath('html/body/div[1]/div/div/div/div/div[2]/form/div/div[3]/button[2]')).first();
            protectBtn.click();
            browser.waitForAngular();
        // }
        // else{
        //     browser.waitForAngular();
        //     var protectBtn = $('form[name="domainProtectionForm"] button.btn.red');
        //     protectBtn.click();
            
        //     browser.waitForAngular();

        //     //This goes through the third upsell page
        //     var secondBtn = $('form[name="renewForm"] button.btn.red');
        //     secondBtn.click();
        //     browser.waitForAngular();
        // }
   // //This goes through the first upsell page
   //      var firstBtn = element.all(By.css('button.btn.red')).first();
   //      firstBtn.click();
   //      browser.waitForAngular();


  }; 

};

module.exports = UpsellPage