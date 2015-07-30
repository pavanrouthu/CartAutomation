
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
			"username": $('.flip-pane.front.cart-box.rc input[id="username"]'),
			"password": $('.flip-pane.front.cart-box.rc input[id="password"]'),
			"loginbtn": $('form[name="loginForm"] button.btn.red')
		},	

		getLocator : function(page,elementname){
			var self = this;
			return self[page][elementname];
		}
	};
	return locators;
};

module.exports = new utildata();