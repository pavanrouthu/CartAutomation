var domainSearchLaunch = require('./Flows/DomainSearchFlow.js');
var domainSearchResultsLaunch = require('./Flows/DomainSearchResultsFlow.js');
var orderSummaryLaunch = require('./Flows/OrderSummaryFlow.js');
var loginPageLaunch = require('./Flows/LoginPageFlow.js');
var gtldupsellLaunch = require('./Flows/GTLDUpsellFlow.js');
var newgtldupsellLaunch = require('./Flows/NewGTLDUpsellFlow.js');
var cctldupsellLaunch = require('./Flows/CCTLDUpsellFlow.js');
var paymentLaunch = require('./Flows/PaymentFlow.js');
var thankYouPageLaunch = require('./Flows/ThankYouPageFlow.js');

var renewPageLaunch = require('./Flows/RenewFlow.js');
var renewupsellLaunch = require('./Flows/RenewUpsellFlow.js');

//var renewPageLaunch = require('./Flows/RenewFlow.js');

describe('Shopping Cart Test Suite', function(){

	var data = require('./testData/testdata complete.json');
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

		// describe('Checks different tests within the Order Flow', function(){

		// 	//Test case to search a domain	

		// 		it('searches for a domain', function(){

		// 		 domainSearchLaunch.DomainSearchFlow(genericdomain);
						
		// 	    });

		// 	//Test case to select available domain and added it to the cart

		// 	    it('selects the domain from the domain search result and adds to the cart',function(){

		// 			domainSearchLaunch.DomainSearchFlow(genericdomain);
		// 			domainSearchResultsLaunch.addToCart();

		// 	    });

		// 	//Test case to check the products that were added to the cart

		// 		it('verify the products that were added to the cart',function(){

		// 			domainSearchLaunch.DomainSearchFlow(genericdomain);
		// 			domainSearchResultsLaunch.addToCart();
		// 			orderSummaryLaunch.validateProduct();

		// 		});

		// 	//Test case to change the value of the price

		// 		it('to change the default value of the Price',function(){

		// 			domainSearchLaunch.DomainSearchFlow(genericdomain);
		// 			domainSearchResultsLaunch.addToCart();
		// 			orderSummaryLaunch.priceChange(commonyear);

		// 		});

		// 	//Test case to search a domain, add it to the cart and click continue on the Order Summary page.

		// 		it('to continue with the domain selected on the Order Summary page',function(){

		// 			domainSearchLaunch.DomainSearchFlow(genericdomain);
		// 			domainSearchResultsLaunch.addToCart();
		// 			orderSummaryLaunch.priceChange(commonyear);
		// 			orderSummaryLaunch.submitSummaryPage();

		// 		});

		// 	//Test case to login to an existing myaccount within new cart

		// 		it('to login using an existing login credentials on the Login page',function(){

		// 			domainSearchLaunch.DomainSearchFlow(genericdomain);
		// 			domainSearchResultsLaunch.addToCart();
		// 			orderSummaryLaunch.priceChange(commonyear);
		// 			orderSummaryLaunch.submitSummaryPage();
		// 			loginPageLaunch.loginToAccount(user, pass);

		// 		});

		// 	//Test case to create a new myaccount within new cart

		// 		it('to create new user credentials on the Login page',function(){

		// 			domainSearchLaunch.DomainSearchFlow(genericdomain);
		// 			domainSearchResultsLaunch.addToCart();
		// 			orderSummaryLaunch.priceChange(commonyear);
		// 			orderSummaryLaunch.submitSummaryPage();
		// 			loginPageLaunch.loginToAccount(user, pass);

		// 		});

		// 	//Test case to check the upsell pages within new cart

		// 		it('to check for the upsell flow',function(){

		// 			domainSearchLaunch.DomainSearchFlow(genericdomain);
		// 			domainSearchResultsLaunch.addToCart();
		// 			orderSummaryLaunch.priceChange(commonyear);
		// 			orderSummaryLaunch.submitSummaryPage();
		// 			loginPageLaunch.loginToAccount(user, pass);
		// 			gtldupsellLaunch.GTLDUpsellFlow();

		// 		});

		// 	//Test case to check the order confirmation after checkout within new cart

		// 		it('to verify the order confirmation after checkout',function(){

		// 			domainSearchLaunch.DomainSearchFlow(genericdomain);
		// 			domainSearchResultsLaunch.addToCart();
		// 			orderSummaryLaunch.priceChange(commonyear);
		// 			orderSummaryLaunch.submitSummaryPage();
		// 			loginPageLaunch.loginToAccount(user, pass);
		// 			gtldupsellLaunch.GTLDUpsellFlow();
		// 			paymentLaunch.createPayment(ccno, ccv, ccname);
		// 			thankYouPageLaunch.orderConfirmation();

		// 		});

		// }); //end of Checks different tests within the Order Flow test script

	describe('Verify ordering of all domain spaces', function(){

		it ('Checks orders within the new cart', function(){		

			//loops through all the domains in the json data source file

			for(var loopData=0; loopData < prod.length; loopData++){
				
				//console.log(loopData);
				//Fetches data about the Product from the json datasource
				var prodArray = prod[loopData];
				var prodname = prodArray.names;
				var prodspace = prodArray.domainspace;
				var yr = prodArray.Yr;

				//console.log(prodspace);	
				//This reads the web application from the conf.js
				browser.get('');

				//To clear local and session storage before loading each and every product
				browser.executeScript('window.localStorage.clear();');
				browser.executeScript('window.sessionStorage.clear();');
			    browser.waitForAngular();

				//A unique domain name is generated
				var randStrg = uuid.v1();
				var dom = 'test' + randStrg + prodspace;
				console.log(dom);

				//All the domainspaces are defined here
			    var gtld = [".net",".com",".info", ".biz",".org", ".mobi"];
			    var autld = [".com.au", ".net.au", ".org.au", ".asn.au",".id.au"];
			    var cctld = [".ac.nz",".at",".be",".ca",".cc",".ch",".co",".co.at",".co.il",".co.nz",".co.uk",".co.za",".com.co",".com.es",".com.fj",".com.hk",".com.ph",".com.sg",".com.tw",".de",".geek.nz",".gen.nz",".hk",".it",".jp",".la",".maori.nz",".net.co",".net.nz",".nl",".nom.co",".nz",".org.nz",".ph",".school.nz",".to",".travel",".tv",".ws",".xxx"];
			    //var newgtld = [".rip", ".run", ".soccer", ".band", ".video", ".express", ".cafe", ".team", ".show", ".dog", ".forsale", ".sale", ".jewelry", ".theater", ".taxi", ".hockey", ".coupons",".sucks",".bid",".buzz",".club",".kiwi",".melbourne",".sydney",".pictures",".academy",".associates",".bargains",".bike",".boutique",".builders",".cab",".camera",".camp",".cards",".care",".cash",".catering",".cheap",".church",".cleaning",".clothing",".coffee",".community",".computer",".construction",".contractors",".cool",".deals",".digital",".direct",".discount",".domains",".enterprises",".estate",".events",".exchange",".fail",".farm",".fish",".fitness",".florist",".foundation",".gifts",".glass",".gripe",".guide",".guru",".house",".industries",".kitchen",".land",".life",".limited",".marketing",".media",".parts",".place",".plumbing",".productions",".properties",".rentals",".repair",".sarl",".services",".shoes",".singles",".solar",".supply",".tools",".town",".toys",".training",".vacations",".vision",".watch",".works",".world",".wtf",".zone",".agency",".business",".center",".city",".company",".directory",".education",".email",".equipment",".exposed",".gallery",".graphics",".gratis",".institute",".international",".lighting",".management",".network",".photography",".photos",".reisen",".report",".schule",".solutions",".supplies",".support",".systems",".technology",".tips",".today",".capital",".careers",".claims",".clinic",".codes",".condos",".cruises",".dating",".delivery",".dental",".diamonds",".engineering",".expert",".finance",".financial",".flights",".fund",".furniture",".healthcare",".holdings",".holiday",".insure",".lease",".limo",".maison",".partners",".pizza",".recipes",".restaurant",".surgery",".tax",".tienda",".university",".ventures",".viajes",".villas",".voyage",".accountants",".credit",".creditcard",".energy",".investments",".loans"];
			    var newgtld = [".bar", ".college", ".design", ".host", ".love", ".online", ".press", ".rent", ".rest", ".site", ".tech", ".website", ".xyz", ".fans", ".theatre", ".wiki", ".space",".courses", ".holiday", ".solutions", ".study", ".systems", ".technology", ".actor", ".attorney", ".auction", ".bid", ".buzz", ".consulting", ".dance", ".degree", ".democrat", ".dentist", ".engineer", ".express", ".gives", ".golf", ".gold", ".lawyer", ".market", ".mortgage", ".ninja", ".plus", ".pub", ".rehab", ".republican", ".reviews", ".rocks", ".social", ".software", ".tour", ".vet", ".agency", ".apartments", ".associates", ".bargains", ".bike", ".bingo", ".boutique", ".builders", ".business", ".cab", ".camera", ".camp", ".capital", ".cards", ".care", ".careers", ".cash", ".casino", ".catering", ".center", ".chat", ".cheap", ".church", ".city", ".claims", ".cleaning", ".clinic", ".clothing", ".coach", ".codes", ".coffee", ".community", ".company", ".computer", ".condos", ".construction", ".contractors", ".cool", ".credit", ".creditcard", ".cruises", ".dating", ".deals", ".delivery", ".dental", ".diamonds", ".digital", ".direct", ".directory", ".discount", ".domains", ".education", ".email", ".energy", ".engineering", ".enterprises", ".equipment", ".estate", ".events", ".exchange", ".expert", ".exposed", ".fail", ".farm", ".finance", ".financial", ".fish", ".fitness", ".flights", ".florist", ".football", ".foundation", ".fund", ".furniture", ".gallery", ".gifts", ".glass", ".graphics", ".gratis", ".gripe", ".guide", ".guru", ".healthcare", ".holdings", ".house", ".industries", ".institute", ".insure", ".international", ".investments", ".kitchen", ".land", ".lease", ".legal", ".life", ".lighting", ".limited", ".limo", ".loans", ".maison", ".management", ".marketing", ".media", ".memorial", ".money", ".network", ".partners", ".parts", ".photography", ".photos", ".pizza", ".place", ".plumbing", ".productions", ".properties", ".recipes", ".reisen", ".rentals", ".repair", ".report", ".restaurant", ".sarl", ".school", ".schule", ".services", ".shoes", ".singles", ".solar", ".style", ".supplies", ".supply", ".support", ".surgery", ".tax", ".tennis", ".tienda", ".tips", ".tires", ".today", ".tools", ".tours", ".town", ".toys", ".training", ".university", ".vacations", ".ventures", ".viajes", ".villas", ".vision", ".voyage", ".watch", ".works", ".world", ".wtf", ".zone", ".academy", ".accountants", ".kiwi", ".band", ".rip", ".video", ".forsale", ".sale", ".cafe", ".team", ".jewelry", ".show", ".dog", ".theater", ".taxi", ".hockey", ".run", ".coupons", ".soccer", ".loans", ".club", ".melbourne", ".sydney", ".sucks"];
			        
				//**** gTLD Order Flow ****
				if (prodname == "null" && (gtld.indexOf(prodspace) > -1)){
						domainSearchLaunch.DomainSearchFlow(dom);
						domainSearchResultsLaunch.addToCart();
						orderSummaryLaunch.priceChange(yr);
						orderSummaryLaunch.submitSummaryPage();
						loginPageLaunch.loginToAccount(user, pass);
						gtldupsellLaunch.GTLDUpsellFlow();
						paymentLaunch.createPayment(ccno, ccv, ccname);
						thankYouPageLaunch.orderConfirmation();

						renewPageLaunch.renewDomains(dom);
						orderSummaryLaunch.priceChange(yr);
						orderSummaryLaunch.submitSummaryPage();
						//loginPageLaunch.loginToAccount(user, pass);
						renewupsellLaunch.UpsellFlow();
						paymentLaunch.createPayment(ccno, ccv, ccname);
						thankYouPageLaunch.orderConfirmation();

				}//**** End gTLD Order Flow ****

				//**** ccTLD Order Flow ****
				if (prodname == "null" && (cctld.indexOf(prodspace) > -1)){
						domainSearchLaunch.DomainSearchFlow(dom);
						domainSearchResultsLaunch.addToCart();
						orderSummaryLaunch.priceChange(yr);
						orderSummaryLaunch.submitSummaryPage();
						loginPageLaunch.loginToAccount(user, pass);
						cctldupsellLaunch.CCTLDUpsellFlow();
						paymentLaunch.createPayment(ccno, ccv, ccname);
						thankYouPageLaunch.orderConfirmation();

						renewPageLaunch.renewDomains(dom);
						orderSummaryLaunch.priceChange(yr);
						orderSummaryLaunch.submitSummaryPage();
						//loginPageLaunch.loginToAccount(user, pass);
						renewupsellLaunch.UpsellFlow();
						paymentLaunch.createPayment(ccno, ccv, ccname);
						thankYouPageLaunch.orderConfirmation();
				}//**** End ccTLD Order Flow ****

				//**** newgTLD Order Flow ****
			    if (prodname == "null" && (newgtld.indexOf(prodspace) > -1)){
			    		domainSearchLaunch.DomainSearchFlow(dom);
						domainSearchResultsLaunch.addToCart();
						orderSummaryLaunch.priceChange(yr);
						orderSummaryLaunch.submitSummaryPage();
						loginPageLaunch.loginToAccount(user, pass);
						newgtldupsellLaunch.NewGTLDUpsellFlow();
						paymentLaunch.createPayment(ccno, ccv, ccname);
						thankYouPageLaunch.orderConfirmation();

						renewPageLaunch.renewDomains(dom);
						orderSummaryLaunch.priceChange(yr);
						orderSummaryLaunch.submitSummaryPage();
						//loginPageLaunch.loginToAccount(user, pass);
						renewupsellLaunch.UpsellFlow();
						paymentLaunch.createPayment(ccno, ccv, ccname);
						thankYouPageLaunch.orderConfirmation();
			    }//**** End newgTLD Order Flow ****

			} // end of the loop

		}); //end of the it condition

	}); //end of the describe of Verify gTLD Order Flow


}); // end of main describe
