//Mathew Dabb
var shopPage
module.exports = {
    ///////////////////////////////////////////////////////////////////
    //See "How-to-Run-Environments" for info on tags and environments//
    ///////////////////////////////////////////////////////////////////
    '@tags': ['desktop'],
    beforeEach: browser => {
        shopPage = browser.page.shop()
        shopPage.navigate()
    },
    after: browser => {
        browser.end()
    },
    //Feature broken as of 6/6/2019
    // 'Account Features': browser => {
    //     shopPage
    //     .accFeat(browser)
    // },
    ///Half the Footers are blocked by a formatting change on the site
    // 'Footers': browser => {
    //     shopPage
    //     .foot(browser)
    // },
    ///Site updates for Pride Month
    // 'General Browsing': browser => {
    //     shopPage
    //     .browse(browser)
    // },
    'Headers and Filters': browser => {
        shopPage
        .perform(()=> {
            if(browser.options.desiredCapabilities.browserName === "chrome") {
                shopPage.headFilt(browser)
            }
            else{
                shopPage.skp(browser)
            }
        })
        
    },
    'Search Bar': browser => {
        shopPage
        .perform(()=> {
            if(browser.options.desiredCapabilities.browserName === "chrome") {
                shopPage.search(browser, 'Key Band')
            }
            else{shopPage.skp(browser)}
        })
        // .search(browser, 'Chargers')
        //Most search terms just make the website hang
        // .search(browser, 'T Shirts')
    },
}