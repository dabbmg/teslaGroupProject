module.exports = {
    beforeEach: browser => {
        browser.url('https://www.tesla.com/')
            .waitForElementPresent('[class="tds-container"]', 5000)

    },
    after: browser => {
        browser.end()
    },
    'Tesla Model S Page': browser => {
        browser
            .moveToElement('a[title="Model S"]', 15, 5, function () {
                browser.mouseButtonClick('left')
            })
            .click('a[title="Model S"]', function () {
                browser
                    .assert.elementPresent('a[title="Model S"]')
                    .retryAssertionTimeout = 2000
            })
            .useXpath()
            .waitForElementPresent('//h2[@data-parallax="hero-subheader"]')
            .useCss()
            .click('[class="tsla-header-main--logo"]')
            .waitForElementPresent('[class="tds-container"]', 5000)


    },
    'Tesla Model 3 Page': browser => {
        browser
            .moveToElement('a[title="Model 3"]', 15, 5, function () {
                browser.mouseButtonClick('left')
            })
        browser
            .click('a[title="Model 3"]', function () {
                browser
                    .assert.elementPresent('a[title="Model 3"]')
                    .retryAssertionTimeout = 2000
            })
            .waitForElementPresent('[class="tds-hero_header-lower  tds-animate_small--to_reveal"]', 5000)
            .useCss()
            .click('[class="tds-header-main--logo"]')
            .waitForElementPresent('[class="tds-container"]', 5000)


    },
    'Tesla Model X Page': browser => {
        browser
            .moveToElement('a[title="Model X"]', 15, 5, function () {
                browser.mouseButtonClick('left')
            })
        browser
            .click('a[title="Model X"]', function () {
                browser
                    .assert.elementPresent('a[title="Model X"]')
                    .retryAssertionTimeout = 2000
            })
            .useXpath()
            .waitForElementPresent('//h2[text()="Model X"][1]', 1000)
            .useCss()
            .click('[class="tsla-header-main--logo"]')
            .waitForElementPresent('[class="tds-container"]', 5000)
            .pause(1000)


    },


    'Tesla Model Y Page': browser => {
        browser
            .moveToElement('a[title="Model Y"]', 15, 5, function () {
                browser.mouseButtonClick('left')
            })
        browser
            .click('a[title="Model Y"]', function () {
                browser
                    .assert.elementPresent('a[title="Model Y"]')
                    .retryAssertionTimeout = 2000
            })
            .waitForElementVisible('[class="tds-hero_header-lower  tds-animate_small--to_reveal"]', 5000)
            .click('[class="tds-header-main--logo"]')
            .waitForElementPresent('[class="tds-container"]', 5000)

            .pause(1000)

    },

    'Roadster Page': browser => {
        browser
            .useXpath()
            .waitForElementVisible('(//a[@href="https://www.tesla.com/roadster"])[1]')
            .moveToElement('(//a[@href="https://www.tesla.com/roadster"])[1]', 15, 5, function () {

                browser
                    .useCss()
                    .mouseButtonClick('left')
            })
        browser
            .useXpath()
            .pause(5000)
            .waitForElementVisible('(//a[@href="/roadster"])[1]', 5000)
            .click('(//a[@href="/roadster"])[1]', function () {
                browser
                    .assert.elementPresent('(//a[@href="/roadster"])[1]')
                    .retryAssertionTimeout = 2000
            })
            .useXpath()
            .waitForElementPresent('//h2[text()="Roadster"]')
            .waitForElementPresent('(//div[@class="text-content"])[1]')
            .useCss()
            .click('[class="tsla-header-main--logo"]')
            .waitForElementPresent('[class="tds-container"]', 5000)




            .pause(1000)
    },

    'Energy Page': browser => {
        browser
            .useXpath()
            .resizeWindow(1920, 1080)
            .waitForElementPresent('(//a[@class="tds-header-nav--list_link"])[6]')
            .moveToElement('(//a[@class="tds-header-nav--list_link"])[6]', 15, 5, function () {
                browser.mouseButtonClick('left')
            })
            browser
                .useCss()
                .waitForElementPresent('[class="_3jfwaxrOyCrLbpyJJ_WGQ4"]', 5000)
                .pause(1000)
                .click('[class="tsla-header-main--logo"]')
                .waitForElementPresent('[class="tds-container"]', 5000)
                .pause(5000)
    }
}

