//Mathew Dabb
///////////////////////////////
//Referring to issue TESLA-57//
///////////////////////////////
////Dummy Account
//Login Email: jonsnow@knightswatch.com
//Login Password: nicepassword123
module.exports = (browser) => {
    browser
    .waitForElementVisible('label[for="tsla-header-main--trigger"]', 10000)
    .click('label[for="tsla-header-main--trigger"]')
    .pause(2000)
    .click('a[class="tsla-header-nav--list_link tsla-link_for-login enable-mobile-link"]')
    .waitForElementVisible('input[id="sign-in-email"]', 10000)
    .setValue('input[id="sign-in-email"]', 'jonsnow@knightswatch.com')
    .waitForElementVisible('input[id="sign-in-password"]', 10000)
    .setValue('input[id="sign-in-password"]', 'nicepassword123')
    .waitForElementVisible('button[data-i18n-key="Sign In & Check Out"]', 10000)
    .click('button[data-i18n-key="Sign In & Check Out"]')
    .waitForElementVisible('label[for="tsla-header-main--trigger"]', 10000)
    .click('label[for="tsla-header-main--trigger"]')
    .pause(2000)
    .verify.containsText('span[id="nav-greetings"]', 'HI TESLA CUSTOMER')
}