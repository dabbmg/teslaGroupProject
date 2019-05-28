var footerLinks = {}

module.exports = {
    beforeEach: browser => {
        footerLinks = browser.page.footerPages()
        footerLinks.navigate()
            .waitForElementPresent('@header', 10000)
    },
    after: browser => {
        browser.end()

    },
    'Check Footer Links': browser => {
        footerLinks
            .verify.visible('@header', 'Tesla Motors')
            .pause(1000)
            .moveToElement('@tesla', 1, 1)
            .waitForElementPresent('@tesla', 10000)
            .verify.visible('@tesla', 'Tesla © 2019')
            .verify.visible('@privacyLegal', 'Privacy & Legal')
            .verify.visible('@contact', 'Contact')
            .verify.visible('@careers', 'Careers')
            .verify.visible('@newsLetter', 'Get Newsletter')
            .verify.visible('@forums', 'Forums')
            .verify.visible('@locations', 'Locations')
            .click('@tesla')
            .waitForElementPresent('@sectionHeader', 10000)
            .verify.visible('@sectionHeader', 'About Tesla')
            .api.back()
        footerLinks
            .moveToElement('@tesla', 1, 1)
            .waitForElementPresent('@privacyLegal', 10000)
            .verify.visible('@privacyLegal', 'Privacy & Legal')
            .click('@privacyLegal')
            .waitForElementPresent('@sectionHeader', 10000)
            .verify.visible('@sectionHeader', 'Legal')
            .pause(1000)
            .api.back()
        footerLinks
            .moveToElement('@tesla', 1, 1)
            .waitForElementPresent('@contact', 10000)
            .verify.visible('@contact', 'Contact')
            .click('@contact')
            .waitForElementPresent('@sectionHeader', 10000)
            .verify.visible('@sectionHeader', 'Contact')
            .pause(1000)
            .api.back()
        footerLinks
            .moveToElement('@tesla', 1, 1)
            .waitForElementPresent('@careers', 10000)
            .verify.visible('@careers', 'Careers')
            .click('@careers')
            .waitForElementPresent('@sectionHeader', 10000)
            .verify.visible('@sectionHeader', 'Careers')
            .pause(1000)
            .api.back()
        footerLinks
            .moveToElement('@tesla', 1, 1)
            .waitForElementPresent('@newsLetter', 10000)
            .verify.visible('@newsLetter', 'Get Newsletter')
            .click('@newsLetter')
            // .waitForElementPresent('@sectionDesc', 2000)
            // .verify.visible('@sectionDesc', 'Be the first to receive the latest Tesla news, events and product updates.')
            .pause(1000)
            .api.back()
        footerLinks
            .moveToElement('@tesla', 1, 1)
            .waitForElementPresent('@forums', 10000)
            .verify.visible('@forums', 'Forums')
            .click('@forums')
            .waitForElementPresent('@forumsHeader', 10000)
            .verify.visible('@forumsHeader', 'Forums')
            .pause(1000)
            .api.back()
        footerLinks
            .moveToElement('@tesla', 1, 1)
            .waitForElementPresent('@locations', 10000)
            .verify.visible('@locations', 'Locations')
            .click('@locations')
            .waitForElementPresent('@sectionHeader', 10000)
            .verify.visible('@sectionHeader', 'Find Us')
            .pause(1000)
            .api.back()
        footerLinks
            
    }
}
