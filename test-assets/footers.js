///////////////////////////////
//Referring to issue TESLA-23//
///////////////////////////////
//Works in: firefox, chrome

module.exports = (browser) => {
    ///////////////////
    //Privacy & Legal//
    ///////////////////
    browser
        .maximizeWindow()
        .waitForElementVisible('a[title="Privacy & Legal"]', 10000)
        .click('a[title="Privacy & Legal"]')
        .waitForElementVisible('h1[class="section-title"]', 10000)
        .expect.element('h1[class="section-title"]').text.to.equal('Legal')
    browser.back()
        ///////////
        //Careers//
        ///////////
        .waitForElementVisible('a[title="Careers"]', 10000)
        .click('a[title="Careers"]')
        .waitForElementVisible('h1[class="section-title"]', 10000)
        .expect.element('h1[class="section-title"]').text.to.equal('Careers')
    browser
        .click('input[value="Search All Jobs"]')
        .waitForElementVisible('th[class="listing-title"]', 10000)
        .useXpath()
        .perform(()=>{
            if (browser.options.desiredCapabilities.browserName === "MicrosoftEdge") {
                browser
                    .verify.containsText('(//th[@class="listing-title"])[1]', 'Title')
                    .verify.containsText('(//th[@class="listing-department"])[1]', 'Job Category')
                    .verify.containsText('(//th[@class="listing-location"])[1]', 'Location')
                    .verify.containsText('(//th[@class="listing-dateposted"])[1]', 'Date Posted')
            }
            else {
                browser
                    .verify.containsText('(//th[@class="listing-title"])[1]', 'TITLE')
                    .verify.containsText('(//th[@class="listing-department"])[1]', 'JOB CATEGORY')
                    .verify.containsText('(//th[@class="listing-location"])[1]', 'LOCATION')
                    .verify.containsText('(//th[@class="listing-dateposted"])[1]', 'DATE POSTED')
            }
        })
    browser.useCss()
    browser.back()
        .waitForElementVisible('h1[class="section-title"]', 10000)
        .click('a[href="/careers/university"]')
        .waitForElementVisible('h1[class="section-title"]', 10000)
        .perform(()=> {
            if(browser.options.desiredCapabilities.browserName === "MicrosoftEdge") {
                browser.verify.containsText('h1[class="section-title"]', 'Internships & Co-Ops')
            }
            else {browser.verify.containsText('h1[class="section-title"]', 'Internships & Co-Ops')}
        })
        browser
        .verify.containsText('h1[class="section-title"]', 'Internships & Co-Ops')
    browser.url('https://shop.tesla.com')
        //////////
        //Forums//
        //////////
        .waitForElementVisible('a[title="Forums"]', 15000)
        .click('a[title="Forums"]')
        .waitForElementVisible('h1[class="page-title-header"]', 10000)
        .verify.containsText('h1[class="page-title-header"]', 'Forums')
    browser
    .perform(()=> {    
    if(browser.options.desiredCapabilities.browserName === "MicrosoftEdge") {
        browser
        .click('a[href="/forum/general"]')
        .verify.containsText('a[title="sort by Topic"]', 'Topic')
        .verify.containsText('a[title="sort by Replies"]', 'Replies')
        .verify.containsText('a[title="sort by Created"]', 'Created')
        .verify.containsText('a[title="sort by Last reply"]', 'Last reply')
        .verify.containsText('a[href="/node/58282"]', 'Please Read First Before Posting On The Forums')
        .expect.element('div[class="forum-status sticky"]').to.be.visible
    }
    else {
        browser
        .click('a[href="/forum/general"]')
        .verify.containsText('a[title="sort by Topic"]', 'TOPIC')
        .verify.containsText('a[title="sort by Replies"]', 'REPLIES')
        .verify.containsText('a[title="sort by Created"]', 'CREATED')
        .verify.containsText('a[title="sort by Last reply"]', 'LAST REPLY')
        .verify.containsText('a[href="/node/58282"]', 'Please Read First Before Posting On The Forums')
        .expect.element('div[class="forum-status sticky"]').to.be.visible
    }

    })
    browser
        .click('a[href="/node/58282"]')
        .waitForElementVisible('div[class="field-items"]', 10000)
        .click('a[href="/forum/257"]')
    browser.url('https://shop.tesla.com')
        /////////////
        //Locations//
        /////////////
        .waitForElementVisible('a[title="Locations"]', 10000)
        .click('a[title="Locations"]')
        .useXpath()
        .waitForElementVisible('(//h1)[2]', 10000)
        .expect.element('(//h1)[2]').text.to.equal('Find Us')
    browser
        .useCss()
        .click('a[href="/findus/list/stores/United+States"]')
        .waitForElementVisible('header[class="findus-list-header"]', 10000)
        .useXpath()
        .waitForElementVisible('(//div[@class="state"])[1]', 10000)
        .waitForElementVisible('(//div[@class="state"])[2]', 10000)
        .verify.containsText('(//div[@class="state"])[1]', 'Arizona')
        .verify.containsText('(//div[@class="state"])[2]', 'California')
        .useCss()
        .click('a[href="/findus/location/store/breamall"]')
        .waitForElementVisible('header[class="findus-list-header"]', 10000)
        .verify.containsText('header[class="findus-list-header"]', 'Brea-Brea Mall')
    browser.url('https://shop.tesla.com')
        ////////////
        //Shop FAQ//
        ////////////
        .waitForElementVisible('a[title="Shop FAQ"]', 10000)
        .click('a[title="Shop FAQ"]')
        .waitForElementVisible('div[class="faqlister__content__title"]', 10000)
        .expect.element('div[class="faqlister__content__title"]').text.to.equal('Tesla Store Help')
    browser
        .click('button[class="faqlister__main__topic__content__question"]')
        .expect.element('button[class="faqlister__main__topic__content__question active"]').to.be.enabled
    browser
        .useXpath()
        .waitForElementVisible('(//p)[6]', 3000)
        .click('(//button[@class="faqlister__main__topic__content__question active"])[1]')
        .pause(2000)
        // .waitForElementNotVisible('(//p)[6]', 3000)
        .click('(//button[@class="faqlister__main__topic__content__question"])[2]')
        .waitForElementVisible('(//p)[10]', 5000)
        .expect.element('(//button[@class="faqlister__main__topic__content__question active"])[1]').to.be.enabled
    browser
        .useCss()
        .click('a[href="#faqlistersection_852537711"]')
    browser.url('https://shop.tesla.com')
        /////////////
        //Tesla.com//
        /////////////
        .waitForElementVisible('a[title="tesla.com"]', 10000)
        .click('a[title="tesla.com"]')
        .waitForElementVisible('div[class="tds-header-nav--primary"]', 10000)
        .verify.containsText('a[title="Model S"]', 'M')
    browser.url('https://shop.tesla.com/')
        //////////////
        //Modal Test//
        //////////////
        .waitForElementVisible('span[data-toggle="modal"]', 10000)
        .click('span[data-toggle="modal"]')
        .waitForElementVisible('div[class="modal-body"]', 5000)
        .click('a[title="Norway"]')
        .waitForElementPresent('a[href="/no/en/product/vehicle-accessories/model-3-all-weather-cargo-mats.html"]', 10000)
        .expect.element('a[href="/no/en/category/vehicle-accessories/model-3.html"]').to.be.visible
    browser
    browser.url('https://shop.tesla.com/')
        .waitForElementVisible('span[data-toggle="modal"]', 10000)
        .click('span[data-toggle="modal"]')
        .waitForElementVisible('div[class="modal-body"]', 5000)
        .click('a[title="Finland"]')
        .waitForElementVisible('a[title="Model 3"]', 10000)
        .expect.element('a[title="Model 3"]').to.be.visible
    browser.url('https://shop.tesla.com/')
    browser
        .waitForElementVisible('span[data-toggle="modal"]', 10000)
        .click('span[data-toggle="modal"]')
        .waitForElementVisible('div[class="modal-body"]', 5000)
        .click('a[title="Canada"]')
        .waitForElementVisible('a[title="Charging"]', 10000)
        .expect.element('a[title="Charging"]').to.be.visible
    browser
}