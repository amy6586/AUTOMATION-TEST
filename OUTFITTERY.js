describe ('To Test OUTFITTERY Login Link Home Page', function() {
	it ('to test login link goes to to the correct page' function(){
		browser.get('https://www.outfittery.com');
		element(by.show('user.signedIn')).click();
	});	
});
describe('To Test OUTFITTERY Login window', function() {
it('should be able to login', function() {
browser.driver
browser.driver.get('https://www.outfittery.com/login/auth');
browser.driver.findElement(by.name('j_username')).sendKeys("amytesteng@gmail.com");
browser.driver.findElement(by.name('j_password')).sendKeys("testing123testing");
browser.driver.findElement(by.id('submit')).click();
});
});
describe('To Test OUTFITTERY Login window error WRONG PASSWORD', function() {
it('should be able to login', function() {
browser.driver
browser.driver.get('https://www.outfittery.com/login/auth');
browser.driver.findElement(by.name('j_username')).sendKeys("amytesteng@gmail.com");
browser.driver.findElement(by.name('j_password')).sendKeys("testing123tASDASDASDesting");
browser.driver.findElement(by.id('submit')).click();
//Printing Text
var txt = browser.driver.findElement(by.PartialLinkText('The combination of e-mail and password is not correct.')).getText()
txt.then(function(text) {
console.log(text);
});
});
});
describe('To Test OUTFITTERY Login window error WRONG uSER NAME', function() {
it('should be able to login', function() {
browser.driver
browser.driver.get('https://www.outfittery.com/login/auth');
browser.driver.findElement(by.name('j_username')).sendKeys("amytesteng@TEST.com");
browser.driver.findElement(by.name('j_password')).sendKeys("testing123tASDASDASDesting");
browser.driver.findElement(by.id('submit')).click();
//Printing Text
var txt = browser.driver.findElement(by.PartialLinkText('The combination of e-mail and password is not correct.')).getText()
txt.then(function(text) {
console.log(text);
});
});
});
