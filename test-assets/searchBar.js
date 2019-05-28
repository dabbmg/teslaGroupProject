///////////////////////////////
//Referring to issue TESLA-20//
///////////////////////////////
//Works in: chrome, firefox
//Terms to search:
//"Key Band", "Chargers", "T Shirts", "Model 3"-Note This one Never actually loads
module.exports = (browser, searchTerm) => {
    browser
    .maximizeWindow()
    .waitForElementPresent('input[id="searchTerm"]', 10000)
    .setValue('input[id="searchTerm"]', [searchTerm , browser.Keys.ENTER])
    .waitForElementVisible('span[class="productlister__container__searchterm"]', 30000)
    .verify.containsText('span[class="productlister__container__searchterm"]', searchTerm)
    
    browser.back()
    .clearValue('input[id="searchTerm"]')
    .pause(700)
}