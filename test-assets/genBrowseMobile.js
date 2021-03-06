//Mathew Dabb
///////////////////////////////
//Referring to issue TESLA-57//
///////////////////////////////
module.exports = (browser) => {
    browser
    .waitForElementVisible('label[for="tsla-header-main--trigger"]', 10000)
    .click('label[for="tsla-header-main--trigger"]')
    .pause(2000)
    .useXpath()
    .click('(//a[@href="/us/en/category/charging/model-s.html"])[1]')
    .waitForElementVisible('//img[@class="c-product__list__item__image ratio primary__image__1050067-21-H active"]', 10000)
    .click('(//a[@href="/us/en/product/vehicle-accessories/gloss-black-wall-connector.html"])[1]')
    .waitForElementVisible('(//img[@data-pdpzoom="/content/dam/tesla/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1050067-21-G_0.jpg"])[2]', 10000)
    .waitForElementVisible('(//input[@id="add"])[2]')
    .click('(//input[@id="add"])[2]')
    .pause(5000)
    .verify.containsText('(//p[@class="shopcart__product__left__details__name e-general__title"])[2]', 'Gloss Black')
    .click('(//span[@data-trigger="delete-product"])[2]')
    .pause(1000)
    .expect.element('(//p[@class="shopcart__product__left__details__name e-general__title"])[2]').to.not.be.present
    browser
    .click('//span[@data-trigger="close-modal"]')
    .pause(3000)
    .click('//label[@for="tsla-header-main--trigger"]')
    .pause(2000)
    .moveToElement('(//li[@class="nav-sub-category-titles-item "])[8]', 100, 20, function() {
        browser.mouseButtonClick('left')
    })
    .pause(1500)
    .click('(//a[@href="/us/en/category/apparel/men.html#tesla.apparel.men.mens.new"])[1]')
    .waitForElementVisible('(//img[@data-productsku="7528800-00-A"])[1]', 10000)
    .click('(//a[@href="/us/en/product/apparel/men_s-small-wordmark-tee.html?sku=7528800-00-A"])[1]')
    .waitForElementVisible('(//label[@class="coolbox product__container__details__color__items__item__label"])[5]', 10000)
    .click('(//label[@class="coolbox product__container__details__color__items__item__label"])[5]')
    .assert.visible('(//img[@src="/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/7528812-00-A_0.jpg"])[2]')
    browser
    .click('//span[@class="tsla-header-main--app_title"]')
    .waitForElementVisible('//button[@class="slick-next slick-arrow"]', 10000)
    .click('//button[@class="slick-next slick-arrow"]')
    .pause(1500)
    .click('//button[@class="slick-next slick-arrow"]')
    .pause(1500)
    .click('(//a[@href="/us/en/product/vehicle-accessories/model-3-all-weather-cargo-mats.html"])[1]')
    .waitForElementVisible('(//h1[@class="product-title"])[2]', 10000)
    .verify.containsText('(//h1[@class="product-title"])[2]', 'Model 3 All-Weather')
    .click('//span[@class="tsla-header-main--app_title"]')
    .waitForElementVisible('(//a[@href="/us/en/category/vehicle-accessories/model-s.html"])[3]', 10000)
    .click('(//a[@href="/us/en/category/vehicle-accessories/model-s.html"])[3]')
    .waitForElementVisible('//strong', 10000)
    .verify.containsText('//strong', 'Model S')
    //Back to CSS
    .useCss()
    
}