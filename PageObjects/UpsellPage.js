
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

};

module.exports = UpsellPage