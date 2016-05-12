var dropdownData = require('../testData/testdata.json');

var utildata = function(){

	var locators = {
		
		"domainsearchpage": {
			"domainName": element.all(By.model('search.query.value')).first(),
			"searchBtn" : element.all(By.css('.element-group>button')).first()
		},
		"domainsearchresults":{
			"domAvail": element(By.css('.cell h2')),
			"resultsBtn": $('.pg-banner button.mit-button')
		},
		"ordersummary":{
			"item": element(By.css('.cs-group.cart-box.ng-scope h2')),
			"price": $('select[ng-model="item.key"]'),
			"summarybtn": $('.pg-body.ng-scope a.btn.red')
		},	
		"orderLogin":{
			"existingusername": $('.flip-pane.front.cart-box.rc input[id="username"]'),
			"existingpassword": $('.flip-pane.front.cart-box.rc input[id="password"]'),
			"loginbtn": element.all(By.css('form[name="loginForm"] button.btn.red')).first(),
			// "loginbtn": $('form[name="loginForm"] button.btn.red'),
			"newlogin": element.all(By.css('.cell.create-account .btn')).first(),
			"firstname": element.all(By.id('firstname')).first(),
			"lastname": element.all(By.id('lastname')).first(),
			"organisation": element(By.id('organisation')),
			"address": element(By.id('address')),
			"country": $('select[id="country"]').element(By.cssContainingText('option', 'Australia')),
			"state": $('select[id="state"]').element(By.cssContainingText('option', 'Victoria')),
			"suburb": element(By.id('suburb')),
			"postcode": element(By.id('postcode')),
			"phoneno": element(By.id('phone')),
			"emailaddress": element(By.id('email')),
			"username": element.all(By.id('username')).first(),
			"password": element.all(By.id('password')).first(),
			"createaccountbtn": $('form[name="createAccountForm"] button.btn.red')
		},
		"orderpayment":{
			"ccno": element(By.id('number')),
			"ccv": element(By.id('cvv')),
			"ccmonth": $('select[id="expiryMonth"]').element(By.cssContainingText('option', dropdownData.ccmonth)),
			"ccyr": $('select[id="expiryYear"]').element(By.cssContainingText('option', dropdownData.ccyear)),
			"ccname": element(By.id('name')),
			"paymentbtn": $('form[name="ccForm"] button.btn.red'),
			"contactfirstname": element.all(By.id('firstname')).first(),
			"contactlastname": element.all(By.id('lastname')).first(),
			"contactemail": element.all(By.id('email')).first(),
		},			
		"orderconf":{
			"ordercomplete": element(By.css('.pg-body.ng-scope h1')),
			"orderid": element.all(By.css('.summary p')).first(),
			"orderdomain": element.all(By.css('.summary h3')).first()
		},
		"renewdomain":{
			"renewsearch": element.all(By.model('form.element.query.value')).first(),
			"renewBtn": element.all(By.css('.element-group>button')).first()
		},
		getLocator : function(page,elementname){
			var self = this;
			return self[page][elementname];
		}
	};
	return locators;
};

module.exports = new utildata();