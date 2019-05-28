///////////////////////////////
//Referring to issue TESLA-38//
///////////////////////////////
//Works in: firefox, chrome
module.exports = (browser) => {
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////Home Page///////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    ////////////////
    //Main Sliders//
    ////////////////
    browser
    .maximizeWindow()
    .waitForElementPresent('a[title="Tesla © 2019"]')
    .click('button[id="slick-slide-control00"]')
    .pause(500)
    .useXpath()
    .click('(//a[@class="hero-container__btn__full"])[2]')
    .useCss()
    .waitForElementPresent('h1[class="product-title"]', 10000)
    .verify.containsText('h1[class="product-title"]', 'Gloss Black Wall Connector')
    //Add/Subtract Quantity
    .verify.containsText('div[class="product__container__details__quantity__value"]', '1')
    .click('div[class="product__container__details__quantity__select__more"]')
    .verify.containsText('div[class="product__container__details__quantity__value"]', '2')
    .click('div[class="product__container__details__quantity__select__less"]')
    .verify.containsText('div[class="product__container__details__quantity__value"]', '1')
    //Add to Cart
    .click('input[value="Add to Cart"]')
    .pause(5000)
    .click('span[class="shopcart-modal__close-icon"]')
    .pause(5000)
    browser.back()
    .click('button[id="slick-slide-control01"]')
    .pause(500)
    .useXpath()
    .click('(//a[@class="hero-container__btn__full"])[3]')
    .useCss()
    .waitForElementPresent('h1[class="product-title"]', 10000)
    .verify.containsText('h1[class="product-title"]', 'Model 3 All Weather')
    .expect.element('img[src="/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1448752-00-B_0.jpg"]').to.be.visible
    browser.back()
    /////////////////////////
    //Best Sellers Carousel//
    /////////////////////////
    .waitForElementPresent('button[class="slick-next slick-arrow"]', 10000)
    .click('button[class="slick-next slick-arrow"]')
    .pause(500)
    //Click one
    .click('a[href="/us/en/product/vehicle-accessories/model-3-all-weather-cargo-mats.html"]')
    .waitForElementPresent('h1[class="product-title"]', 10000)
    .verify.containsText('h1[class="product-title"]', 'Model 3 All-Weather')
    browser.back()
    .pause(1000)
    .waitForElementPresent('i[class="tsla-icon-angle_left tsla-icon_size--small"]', 10000)
    .click('i[class="tsla-icon-angle_left tsla-icon_size--small"]')
    .pause(3000)
    .useXpath()
    //Click Another
    .moveToElement('(//a[@href="/us/en/product/apparel/tesla-wireless-phone-charger.html?sku=1479398-00-A"])[3]', 50, 100, function() {
        browser.mouseButtonClick('left')
    })
    .useCss()
    .waitForElementVisible('h1[class="product-title"]', 10000)
    .verify.containsText('h1[class="product-title"]', 'Tesla Wireless Phone Charger')
    browser.back()
    ///////////////////////////
    //Home Page Image Buttons//
    ///////////////////////////
    .useXpath()
    .waitForElementVisible('(//a[@href="/us/en/category/vehicle-accessories/model-3.html"])[3]', 10000)
    .click('(//a[@href="/us/en/category/vehicle-accessories/model-3.html"])[3]')
    .useCss()
    .waitForElementPresent('div[class="container"]', 10000)
    .verify.containsText('div[class="container"]', 'Model 3')
    browser.back()
    .useXpath()
    .waitForElementVisible('(//a[@href="/us/en/category/vehicle-accessories/model-x.html"])[3]', 10000)
    .click('(//a[@href="/us/en/category/vehicle-accessories/model-x.html"])[3]')
    .useCss()
    .waitForElementPresent('div[class="container"]', 10000)
    .verify.containsText('div[class="container"]', 'Model X')
    //Use Selector to select Black Coat Hangers
    .click('a[href="/us/en/product/vehicle-accessories/coat-hooks.html"]')
    .waitForElementVisible('div[class="selectric"]', 10000)
    .click('div[class="selectric"]')
    .useXpath()
    .waitForElementVisible('(//li[@class="product__container__details__color__items__item active"])[2]', 2000)
    .click('(//li[@class="product__container__details__color__items__item active"])[2]')
    .verify.containsText('(//span[@class="label"])[1]', 'Coat Hooks - Black')
    browser.url('https://shop.tesla.com')
    .waitForElementVisible('(//a[@href="/us/en/category/vehicle-accessories/model-s.html"])[3]', 10000)
    .click('(//a[@href="/us/en/category/vehicle-accessories/model-s.html"])[3]')
    .waitForElementVisible('//div[@class="container"]', 10000)
    .verify.containsText('//div[@class="container"]', 'Model S')
    .click('//a[@href="/us/en/product/vehicle-accessories/model-s-car-cover.html"]')
    //Use Selector to select Outdoor Cover
    .waitForElementVisible('//div[@class="selectric-wrapper selectric-product__container__details__color__items__altview__select selectric-js-select"]', 10000)
    .click('//div[@class="selectric-wrapper selectric-product__container__details__color__items__altview__select selectric-js-select"]')
    .waitForElementVisible('//li[@class="product__container__details__color__items__item last"]', 10000)
    .click('//li[@class="product__container__details__color__items__item last"]')
    .verify.containsText('(//span[@class="label"])[1]', 'Outdoor')
    browser.url('https://shop.tesla.com')
    .useXpath()
    .waitForElementVisible('(//a[@href="/us/en/category/charging.html"])[2]', 10000)
    .click('(//a[@href="/us/en/category/charging.html"])[2]')
    .waitForElementVisible('//div[@class="header section"]', 10000)
    .verify.containsText('(//div[@class="header section"])[1]', 'Model S')
    .verify.containsText('(//div[@class="header section"])[2]', 'Model X')
    .verify.containsText('(//div[@class="header section"])[3]', 'Model 3')
    .verify.containsText('(//h2[@class="c-product__container__title"])[1]', 'Charging')
    browser.back()
    .waitForElementVisible('(//a[@href="/us/en/category/apparel/men.html"])[3]', 10000)
    .click('(//a[@href="/us/en/category/apparel/men.html"])[3]')
    .waitForElementVisible('//strong', 10000)
    .verify.containsText('//strong', 'Men')
    browser.back()
    .waitForElementVisible('(//a[@href="/us/en/category/apparel/women.html"])[3]', 10000)
    .click('(//a[@href="/us/en/category/apparel/women.html"])[3]')
    .waitForElementVisible('//strong', 10000)
    .verify.containsText('//strong', 'Women')
    //Quick Add by Size
    .moveToElement('(//a[@href="/us/en/product/apparel/women_s-corp-jacket.html?sku=100036605"])[1]', undefined, undefined, function() {
        browser.moveToElement('(//div[@class="quickadd__with__size__container active"])[1]', 140, 7, function() {
            browser.click('(//button[@data-sku="100036601"])[1]')
        })
    })
    .pause(5000)
    .useCss()
    //Close Cart after selecting by size
    .click('span[class="shopcart-modal__close-icon"]')
    .pause(5000)
    //Color Selectors
    .useXpath()
    .click('(//a[@href="/us/en/product/apparel/women_s-small-wordmark-tee.html?sku=7528818-00-A"])[1]')
    .waitForElementVisible('(//section[@class="product-color product__container__details__color"])[1]', 10000)
    .click('(//label[@for="Gray"])[1]')
    .waitForElementVisible('(//img[@src="/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/7528828-00-A_0.jpg"])[1]', 10000)
    .click('(//label[@for="White"])[1]')
    .waitForElementVisible('(//img[@src="/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/7528823-00-A_0.jpg"])[1]', 10000)
    .pause(1000)
    ///////////////Can't get it select size
    // .pause(3000)
    // .moveToElement('(//input[@data-sku="7528820-00-A"])[2]', 5, 10, function() {
    //     browser.mouseButtonClick('left')
    // })
    // .useCss()
    // .waitForElementVisible('input[class="btn-purchasable tsla-btn product__container__details__submit__buy"]', 10000)
    // .click('input[class="btn-purchasable tsla-btn product__container__details__submit__buy"]')
    // .useXpath()
    // .pause(2500)
    // .verify.containsText('(//span[@class="shopcart__color-size"])[3]', 'White, M')
    .moveToElement('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[4]', 1, 2, function() {
        browser.pause(300)
        browser.waitForElementVisible('(//a[contains (text(), "Tech")])[2]', 500, function() {
            browser.click('(//a[contains (text(), "Tech")])[2]')
        }, "Click Lifestyle Tech")   
    }),
    browser
    .waitForElementVisible('(//img[@data-productsku="8756721-00-A"])[3]', 10000)
    .click('(//img[@data-productsku="8756721-00-A"])[3]')
    .waitForElementVisible('(//input[@data-item-added="Added"])[1]', 10000)
    .click('(//input[@data-item-added="Added"])[1]')
    .pause(6000)
    //Move to Checkout
    .click('//a[@data-button="checkout"]')
    .pause(6000)
    .waitForElementVisible('//button[@name="cancel"]', 10000)
    .click('//button[@name="cancel"]')
    .waitForElementVisible('//h3[@class="shopcart-header"]', 10000)
    .verify.containsText('//h3[@class="shopcart-header"]', 'Your Cart')
    // .getText('(//span[@class="inline-value"])[4]', function(price) {
    //     console.log(price)
    // })
    .verify.containsText('(//h2[@class="shippinginfo__container__title"])[1]', 'Guest Checkout')
    .setValue('//input[@id="profileFirstName"]', 'Jon')
    .setValue('//input[@id="profileLastName"]', 'Snow')
    .setValue('//input[@id="guestEmail"]', 'jonsnow@knightswatch.com')
    .setValue('//input[@id="firstNameShipping"]', 'Jon')
    .setValue('//input[@id="lastNameShipping"]', 'Snow')
    .setValue('//input[@id="addressShipping"]', 'The North')
    //Back to CSS
    .useCss()


}