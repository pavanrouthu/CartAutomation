
<<<<<<< HEAD
var HtmlReporter = require('protractor-html-screenshot-reporter');
=======
// var HtmlReporter = require('protractor-html-screenshot-reporter');

>>>>>>> 514a7aab60130d4af5fa429c5da210e3acdf737e


var reporter = new HtmlReporter({
    baseDirectory: './protractor-result', // a location to store screen shots.
    docTitle: 'Protractor Reporter',
    docName:    'protractor-tests-report.html'
});

exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  specs: ['sanitytest.spec.js'],
  baseUrl: 'https://stage.melbourneit.com.au/',
  allScriptsTimeout: 10000000,
  jasmineNodeOpts: {showColors: true, defaultTimeoutInterval: 50000000},

  //-----------------------------------------------------------------
  //Browser and Capabilities: Firefox
  //-----------------------------------------------------------------
  capabilities: {
    browserName: 'firefox',
    version: '',
    platform: 'ANY'
  },

<<<<<<< HEAD
   onPrepare: function() {
		 jasmine.getEnv().addReporter(reporter);
   }
//   onPrepare: function() {
// //   The require statement must be down here, since jasmine-reporters
// //   needs jasmine to be in the global and protractor does not guarantee
// //   this until inside the onPrepare function.
//   require('jasmine-reporters');
//   jasmine.getEnv().addReporter(
//     new jasmine.JUnitXmlReporter('cartxmloutput', true, true));
// }
=======
  //  onPrepare: function() {
		// jasmine.getEnv().addReporter(reporter);
  //  }
  onPrepare: function() {
//   The require statement must be down here, since jasmine-reporters
//   needs jasmine to be in the global and protractor does not guarantee
//   this until inside the onPrepare function.
  require('jasmine-reporters');
  jasmine.getEnv().addReporter(
    new jasmine.JUnitXmlReporter('cartxmloutput', true, true));
}
>>>>>>> 514a7aab60130d4af5fa429c5da210e3acdf737e

};
