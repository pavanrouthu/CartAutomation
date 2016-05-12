var domainSearchLaunch = require('./Flows/DomainSearchFlow.js');
var domainSearchResultsLaunch = require('./Flows/DomainSearchResultsFlow.js');
var orderSummaryLaunch = require('./Flows/OrderSummaryFlow.js');
var loginPageLaunch = require('./Flows/LoginPageFlow.js');
var gtldupsellLaunch = require('./Flows/GTLDUpsellFlow.js');
var newgtldupsellLaunch = require('./Flows/NewGTLDUpsellFlow.js');
var cctldupsellLaunch = require('./Flows/CCTLDUpsellFlow.js');
var paymentLaunch = require('./Flows/PaymentFlow.js');
var thankYouPageLaunch = require('./Flows/ThankYouPageFlow.js');
// var PerfRunner = require('protractor-perf');



describe('Shopping Cart Test Suite', function(){
// var perfRunner = new PerfRunner(protractor, browser);
	var data = require('./testData/testdata.json');
	var uuid = require('uuid');

	var prod = data.products;
	var user = data.username;
	var pass = data.password;
	var ccno = data.ccnumber;
	var cctype = data.cctype;
	var ccmth = data.ccmonth;
	var ccyr = data.ccyear;
	var ccv = data.ccv;
	var ccname = data.ccname;
	var commonspace = data.genericspace;
	var commonyear = data.genericyear;

	//A generic unique domain name is generated
	var randomStrg = uuid.v1();
	global.genericdomain = 'generic' + randomStrg + commonspace;


	beforeEach(function() {
    	browser.get('');
    	browser.waitForAngular();

		//To clear local and session storage before starting a run
		browser.executeScript('window.localStorage.clear();');
		browser.executeScript('window.sessionStorage.clear();');

	});
	
	describe('Checks different tests within the Order Flow', function(){

		//Test case to search a domain	

			it('searches for a domain', function(){
// perfRunner.start();
			 domainSearchLaunch.DomainSearchFlow(genericdomain);
		// if (perfRunner.isEnabled) {
  //           expect(perfRunner.getStats('meanFrameTime')).toBeLessThan(60);
  //       };
// perfRunner.stop();					
		    });

		//Test case to select available domain and added it to the cart

		    it('selects the domain from the domain search result and adds to the cart',function(){

				domainSearchLaunch.DomainSearchFlow(genericdomain);
				domainSearchResultsLaunch.addToCart();

		    });

		//Test case to check the products that were added to the cart

			it('verify the products that were added to the cart',function(){

				domainSearchLaunch.DomainSearchFlow(genericdomain);
				domainSearchResultsLaunch.addToCart();
				orderSummaryLaunch.validateProduct();

			});

		//Test case to change the value of the price

			it('to change the default value of the Price',function(){

				domainSearchLaunch.DomainSearchFlow(genericdomain);
				domainSearchResultsLaunch.addToCart();
				orderSummaryLaunch.priceChange(commonyear);

			});

		//Test case to search a domain, add it to the cart and click continue on the Order Summary page.

			it('to continue with the domain selected on the Order Summary page',function(){

				domainSearchLaunch.DomainSearchFlow(genericdomain);
				domainSearchResultsLaunch.addToCart();
				orderSummaryLaunch.priceChange(commonyear);
				orderSummaryLaunch.submitSummaryPage();

			});

		//Test case to login to an existing myaccount within new cart

			it('to login using an existing login credentials on the Login page',function(){

				domainSearchLaunch.DomainSearchFlow(genericdomain);
				domainSearchResultsLaunch.addToCart();
				orderSummaryLaunch.priceChange(commonyear);
				orderSummaryLaunch.submitSummaryPage();
				loginPageLaunch.loginToAccount(user, pass);

			});

		//Test case to create a new myaccount within new cart

			it('to create new user credentials on the Login page',function(){

				domainSearchLaunch.DomainSearchFlow(genericdomain);
				domainSearchResultsLaunch.addToCart();
				orderSummaryLaunch.priceChange(commonyear);
				orderSummaryLaunch.submitSummaryPage();
				loginPageLaunch.createAccount(user, pass);

			});

		//Test case to check the upsell pages within new cart

			it('to check for the upsell flow',function(){

				domainSearchLaunch.DomainSearchFlow(genericdomain);
				domainSearchResultsLaunch.addToCart();
				orderSummaryLaunch.priceChange(commonyear);
				orderSummaryLaunch.submitSummaryPage();
				loginPageLaunch.loginToAccount(user, pass);
				gtldupsellLaunch.GTLDUpsellFlow();

			});

		//Test case to check the order confirmation after checkout within new cart

			it('to verify the order confirmation after checkout',function(){

				domainSearchLaunch.DomainSearchFlow(genericdomain);
				domainSearchResultsLaunch.addToCart();
				orderSummaryLaunch.priceChange(commonyear);
				orderSummaryLaunch.submitSummaryPage();
				loginPageLaunch.loginToAccount(user, pass);
				gtldupsellLaunch.GTLDUpsellFlow();
				paymentLaunch.createPayment(ccno, ccv, ccname);
				thankYouPageLaunch.orderConfirmation();

			});

	}); //end of Checks different tests within the Order Flow test script

}); // end of main describe
