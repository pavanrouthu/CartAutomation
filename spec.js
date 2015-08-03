var domainSearchLaunch = require('./Flows/DomainSearchFlow.js');
var domainSearchResultsLaunch = require('./Flows/DomainSearchResultsFlow.js');
var orderSummaryLaunch = require('./Flows/OrderSummaryFlow.js');
var loginPageLaunch = require('./Flows/LoginPageFlow.js');
var upsellLaunch = require('./Flows/UpsellFlow.js');
var paymentLaunch = require('./Flows/PaymentFlow.js');
var thankYouPageLaunch = require('./Flows/ThankYouPageFlow.js');

describe('Verify Order Flow', function(){

	beforeEach(function() {
    	browser.get('');
    	browser.waitForAngular();
		//To clear local and session storage before starting a run
		browser.executeScript('window.localStorage.clear();');
		browser.executeScript('window.sessionStorage.clear();');
	});
	
//Test case to search a domain	

	it('searches for a domain', function(){
		
	 domainSearchLaunch.DomainSearchFlow();
			
    });

//Test case to select available domain and added it to the cart

    it('selects the domain from the domain search result and adds to the cart',function(){

		domainSearchLaunch.DomainSearchFlow();
		domainSearchResultsLaunch.addToCart();

    });

//Test case to check the products that were added to the cart

	it('verify the products that were added to the cart',function(){

		domainSearchLaunch.DomainSearchFlow();
		domainSearchResultsLaunch.addToCart();
		orderSummaryLaunch.validateProduct();

	});

//Test case to change the value of the price

	it('to change the default value of the Price',function(){

		domainSearchLaunch.DomainSearchFlow();
		domainSearchResultsLaunch.addToCart();
		orderSummaryLaunch.priceChange();

	});

//Test case to search a domain, add it to the cart and click continue on the Order Summary page.

	it('to continue with the domain selected on the Order Summary page',function(){

		domainSearchLaunch.DomainSearchFlow();
		domainSearchResultsLaunch.addToCart();
		orderSummaryLaunch.priceChange();
		orderSummaryLaunch.submitSummaryPage();

	});

//Test case to login to an existing myaccount within new cart

	it('to login using an existing login credentials on the Login page',function(){

		domainSearchLaunch.DomainSearchFlow();
		domainSearchResultsLaunch.addToCart();
		orderSummaryLaunch.priceChange();
		orderSummaryLaunch.submitSummaryPage();
		loginPageLaunch.loginToAccount();

	});

//Test case to create a new myaccount within new cart

	it('to create new user credentials on the Login page',function(){

		domainSearchLaunch.DomainSearchFlow();
		domainSearchResultsLaunch.addToCart();
		orderSummaryLaunch.priceChange();
		orderSummaryLaunch.submitSummaryPage();
		loginPageLaunch.createAccount();

	});

//Test case to check the upsell pages within new cart

	it('to check for the upsell flow',function(){

		domainSearchLaunch.DomainSearchFlow();
		domainSearchResultsLaunch.addToCart();
		orderSummaryLaunch.priceChange();
		orderSummaryLaunch.submitSummaryPage();
		loginPageLaunch.loginToAccount();
		upsellLaunch.UpsellFlow();

	});

//Test case to check the checkout within new cart

	it('to verify the checkout functionality',function(){

		domainSearchLaunch.DomainSearchFlow();
		domainSearchResultsLaunch.addToCart();
		orderSummaryLaunch.priceChange();
		orderSummaryLaunch.submitSummaryPage();
		loginPageLaunch.loginToAccount();
		upsellLaunch.UpsellFlow();
		paymentLaunch.createPayment();

	});

//Test case to check the order confirmation after checkout within new cart

	it('to verify the order confirmation after checkout',function(){

		domainSearchLaunch.DomainSearchFlow();
		domainSearchResultsLaunch.addToCart();
		orderSummaryLaunch.priceChange();
		orderSummaryLaunch.submitSummaryPage();
		loginPageLaunch.loginToAccount();
		upsellLaunch.UpsellFlow();
		paymentLaunch.createPayment();
		thankYouPageLaunch.orderConfirmation();

	});

});