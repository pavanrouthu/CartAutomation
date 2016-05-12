
var HtmlReporter = require('protractor-html-screenshot-reporter');
//     // var jasmineReporters = require('jasmine-reporters');

var reporter = new HtmlReporter({
    baseDirectory: './protractor-result', // a location to store screen shots.
    docTitle: 'Protractor Reporter',
    docName:    'protractor-tests-report.html'
});

exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  specs: ['spec.js'],
  baseUrl: 'https://stage.melbourneit.com.au/',
  allScriptsTimeout: 10000000,
  jasmineNodeOpts: {showColors: true, defaultTimeoutInterval: 50000000},

  // -----------------------------------------------------------------
  // Browser and Capabilities: Firefox
  // -----------------------------------------------------------------
  // capabilities: {
  //   browserName: 'phantomjs',
  //   'phantomjs.binary.path': './node_modules/phantomjs/bin/phantomjs',
  //   'phantomjs.cli.args': ['--ignore-ssl-errors=true',  '--web-security=false']
  // },

   onPrepare: function() {
		jasmine.getEnv().addReporter(reporter);
   }

};