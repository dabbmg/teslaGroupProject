module.exports = {
    beforeEach: browser => {
        browser.url('https://www.tesla.com/')
            .waitForElementPresent('[class="tds-container"]', 5000)

    },
    after: browser => {
        browser.end()
    },

    'Teslas Existing Inventory': browser => {
        browser
            .click('[class="tds-header-main--trigger_icon"]')
            .waitForElementPresent('[class="tds-header-nav--secondary"]', 5000)
            .pause(2000)
            .useXpath()
            .click('(//a[@title="Existing Inventory"])[2]')
            .useCss()
            .waitForElementPresent('[src="https://static-assets.tesla.com/share/inventory_search_tool/dist/assets/hero-ms.jpg?1.0.2-2019052010"]', 5000)
            .click('[class="tsla-header-main--logo"]')
            .waitForElementPresent('[class="tds-container"]')
            .pause(2000)
    },
    'Teslas Used Inventory': browser => {
        browser
            .click('[class="tds-header-main--trigger_icon"]')
            .waitForElementPresent('[class="tds-header-nav--secondary"]', 5000)
            .pause(2000)
            .useXpath()
            .click('(//a[@title="Used Inventory"])[2]')
            .useCss()
            .waitForElementPresent('[src="https://static-assets.tesla.com/share/inventory_search_tool/dist/assets/hero-ms.jpg?1.0.2-2019052010"]', 5000)
            .click('[class="tsla-header-main--logo"]')
            .waitForElementPresent('[class="tds-container"]')
            .pause(3000)
    },
    'Teslas Find Us': browser => {
        browser
            .click('[class="tds-header-main--trigger_icon"]')
            .waitForElementPresent('[class="tds-header-nav--secondary"]', 5000)
            .pause(2000)
            .useXpath()
            .click('(//a[@title="Find Us"])[2]')
            .useCss()
            .waitForElementPresent('[class="search-input tsla-icon-search"]', 5000)
            .click('[class="tsla-header-main--logo"]')
            .waitForElementPresent('[class="tds-container"]')
            .pause(3000)
    },
    'Teslas Support': browser => {
        browser
            .click('[class="tds-header-main--trigger_icon"]')
            .waitForElementPresent('[class="tds-header-nav--secondary"]', 5000)
            .pause(2000)
            .useXpath()
            .click('(//a[@title="Support"])[1]')
            .useCss()
            .waitForElementPresent('[class="tds-input-search"]', 5000)
            .click('[class="tsla-header-main--logo"]')
            .waitForElementPresent('[class="tds-container"]')
            .pause(3000)

    },
    'Teslas Get Newsletter': browser => {
        browser
            .click('[class="tds-header-main--trigger_icon"]')
            .waitForElementPresent('[class="tds-header-nav--secondary"]', 5000)
            .pause(2000)
            .useXpath()
            .click('(//a[@title="Get Newsletter"])[1]')
            .useCss()
            .waitForElementPresent('[placeholder="Enter email address"]', 5000)
            .click('[class="tsla-header-main--logo"]')
            .waitForElementPresent('[class="tds-container"]')
            .pause(3000)
    },
    'Teslas News': browser => {
        browser
            .click('[class="tds-header-main--trigger_icon"]')
            .waitForElementPresent('[class="tds-header-nav--secondary"]', 5000)
            .pause(2000)
            .useXpath()
            .click('(//a[@title="News"])[1]')
            .useCss()
            .waitForElementPresent('[class="tsla-header-nav--list"]', 5000)
            .click('[class="tsla-header-main--logo"]')
            .waitForElementPresent('[class="tds-container"]')
            .pause(3000)

    },
    'Teslas Charging': browser => {
        browser
            .click('[class="tds-header-main--trigger_icon"]')
            .waitForElementPresent('[class="tds-header-nav--secondary"]', 5000)
            .pause(2000)
            .useXpath()
            .click('(//a[@title="Charging"])[1]')
            .useCss()
            .waitForElementPresent('[poster]', 5000)
            .pause(5000)
            .click('[class="tsla-header-main--logo"]')
            .waitForElementPresent('[class="tds-container"]')
            .pause(3000)

    },
    'Teslas Semi': browser => {
        browser
            .click('[class="tds-header-main--trigger_icon"]')
            .waitForElementPresent('[class="tds-header-nav--secondary"]', 5000)
            .pause(2000)
            .useXpath()
            .click('(//a[@title="Semi"])[1]')
            .useCss()
            .waitForElementPresent('[data-paralax="hero-copy"]', 5000)
            .pause(5000)
            .click('[class="tsla-header-main--logo"]')
            .waitForElementPresent('[class="tds-container"]')
            .pause(3000)
    },

    'Teslas Carbon Impact': browser => {
        browser
            .click('[class="tds-header-main--trigger_icon"]')
            .waitForElementPresent('[class="tds-header-nav--secondary"]', 5000)
            .pause(2000)
            .click('[title="Carbon Impact"]')
            .waitForElementPresent('[class="app"]', 5000)
            .click('[class="tsla-header-main--logo"]')
            .waitForElementPresent('[class="tds-container"]')
            .pause(3000)

    },
    'Teslas Laungage Changer (Mexico)': browser => {
        browser
            .resizeWindow(1920, 1080)
            .click('[class="tds-header-main--trigger_icon"]')
            .waitForElementPresent('[class="tds-header-nav--secondary"]', 5000)
            .pause(2000)
            .useXpath()
            .click('//span[@class="tds-header-nav--list_link"]')
            .useCss()
            .pause(3000)
            .waitForElementPresent('[class="locale-header notranslate"]')
            .useXpath()
            .click('(//a[@title="México"])[1]')
            .pause(2000)
            .waitForElementPresent('(//a[@title="Registrarse"])[1]', 5000)
            .useCss()
            .click('[class="tds-header-main--trigger_icon"]')
            .waitForElementPresent('[class="tds-header-nav--secondary"]', 5000)
            .pause(5000)
    },
    'Teslas Laungage Changer (Deutschland)': browser => {
        browser
            .resizeWindow(1920, 1080)
            .click('[class="tds-header-main--trigger_icon"]')
            .waitForElementPresent('[class="tds-header-nav--secondary"]', 5000)
            .pause(2000)
            .useXpath()
            .click('//span[@class="tds-header-nav--list_link"]')
            .useCss()
            .click('[title="Deutschland"]')
            .useXpath()
            .waitForElementPresent('(//a[@class="tds-btn tds-btn--white tds-btn--large"])[2]', 5000)
            .useCss()
            .pause(1000)
    },
    'Teslas Laungage Changer (Korean)': browser => {
        browser
            .resizeWindow(1920, 1080)
            .click('[class="tds-header-main--trigger_icon"]')
            .waitForElementPresent('[class="tds-header-nav--secondary"]', 5000)
            .pause(2000)
            .useXpath()
            .click('//span[@class="tds-header-nav--list_link"]')
            .click('//a[@title="대한민국"]')
            .waitForElementPresent('(//a[@title="스토어 방문"])[1]')
            .useCss()


    },
    'Teslas Laungage Changer (English)': browser => {
        browser.url('https://www.tesla.com/ko_KR?redirect=no')
            .resizeWindow(1920, 1080)
            .click('[class="tds-header-main--trigger_icon"]')
            .waitForElementPresent('[class="tds-header-nav--secondary"]', 5000)
            .pause(2000)
            .useXpath()
            .click('//span[@class="tds-header-nav--list_link"]')
            .click('//a[@title="United States"]')
            .useCss()
            .waitForElementPresent('[class="image transition--intro-width"]')
            .pause(5000)

}
}

