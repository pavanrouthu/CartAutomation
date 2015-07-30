
var HtmlReporter = require('protractor-html-screenshot-reporter');
//     // var jasmineReporters = require('jasmine-reporters');

var reporter = new HtmlReporter({
    baseDirectory: './protractor-result', // a location to store screen shots.
    docTitle: 'Protractor Reporter',
    docName:    'protractor-tests-report.html'
});

exports.config = {
  seleniumAddress: 'http://127.0.0.1:4445/wd/hub',
  specs: ['spec.js'],
  baseUrl: 'https://stage.melbourneit.com.au/',
  allScriptsTimeout: 10000000,
  jasmineNodeOpts: {showColors: true, defaultTimeoutInterval: 50000000},

  //-----------------------------------------------------------------
  //Browser and Capabilities: Firefox
  //-----------------------------------------------------------------
  // capabilities: {
  //   browserName: 'firefox',
  //   version: '',
  //   platform: 'ANY'
  // },

   onPrepare: function() {
		jasmine.getEnv().addReporter(reporter);
   }

};