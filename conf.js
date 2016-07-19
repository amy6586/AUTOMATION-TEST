exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
   //Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },
   onPrepare: function() {
    // Override the timeout for webdriver.
    browser.driver.manage().timeouts().implicitlyWait(60000);
  },
  specs: ['OUTFITTERY.js']
};
