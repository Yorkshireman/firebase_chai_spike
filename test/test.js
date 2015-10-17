var assert = require('chai').assert;
var expect = require('chai').expect;
var test = require('selenium-webdriver/testing');
var webdriver = require('selenium-webdriver');

describe('Writing Messages', function() {
  it("'foo' should be a string using 'assert'", function() {
		var foo = "bar"
		assert.typeOf(foo, 'string');
  });

  test.it('index.html should have Home Page displayed', function() {
    var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();
    driver.get('file:/home/andrew/projects/firebase_chai_spike/index.html');
    
    var title = driver.findElement(webdriver.By.id('title'));

    title.getInnerHtml().then(function(html) {
        expect(html).to.equal("Home Page");
    });
    
    driver.quit();
  });
});