//Mathew Dabb
var shopPage
module.exports = {
    ///////////////////////////////////////////////////////////////////
    //See "How-to-Run-Environments" for info on tags and environments//
    ///////////////////////////////////////////////////////////////////
    '@tags': ['mobile'],
    beforeEach: browser => {
        shopPage = browser.page.shop()
        shopPage.navigate()
    },
    after: browser => {
        browser.end()
    },
    'General Browsing on Mobile': browser => {
        shopPage
        .mobile(browser)
    },
    //Feature broken as of 6/6/2019
    // 'Mobile Login': browser => {
    //     shopPage
    //     .mobileLgn(browser)
    // }

}