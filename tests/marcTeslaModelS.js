var teslaModelS = {}

module.exports = {
    beforeEach: browser => {
        teslaModelS = browser.page.teslaPages()
        teslaModelS.navigate()
            .waitForElementPresent('@header', 10000)
    },
    after: browser => {
        browser.end()

    },
    'Check Model S page': browser => {
        teslaModelS
            .verify.visible('@header', 'Tesla Motors')
            .pause(1000)
            // .click('@models')
            .verify.visible('@sectionModelS', 'Model S')
            .moveToElement('@moveToSafety',1,1)
            .waitForElementPresent('@safety',10000)
            .click('@safety')
            .pause(2000)
            .verify.visible('@safetyHeader', 'Safety')
            .verify.visible('@safetyText', 'High Impact Protection')
            .verify.visible('@safetyLearnMore', 'Learn More')
            .waitForElementPresent('@safetyExpandButton',10000)
            .click('@safetyExpandButton')
            .pause(1000)
            .verify.visible('@safetyVerify', 'Active Safety')
            .click ('@verifyClose')

            .moveToElement('@moveToPerformance',1,1)
            .waitForElementPresent('@performance',10000)
            .click('@performance')
            .pause(2000)
            .verify.visible('@performanceHeader', 'Performance')
            .verify.visible('@performanceText', 'Quickest Acceleration')
            .verify.visible('@performanceLearnMore', 'Learn More')
            .waitForElementPresent('@performanceExpandButton',10000)
            .click('@performanceExpandButton')
            .pause(1000)
            .verify.visible('@performanceVerify', 'Electric Powertrain')
            .click ('@verifyClose')

            .moveToElement('@moveToRange',1,1)
            .waitForElementPresent('@range',10000)
            .click('@range')
            .pause(2000)
            .verify.visible('@rangeHeader', 'Range')
            .verify.visible('@rangeText', 'Go Anywhere')
            .verify.visible('@rangeLearnMore', 'Learn More')
            .waitForElementPresent('@rangeExpandButton',10000)
            .click('@rangeExpandButton')
            .pause(1000)
            .verify.visible('@rangeVerify', 'Go Anywhere')
            .click ('@verifyClose')

            .moveToElement('@moveToAutopilot',1,1)
            .waitForElementPresent('@autopilot',10000)
            .click('@autopilot')
            .pause(2000)
            .verify.visible('@autopilotHeader', 'Autopilot')
            .verify.visible('@autopilotText', 'Future of Driving')
            .verify.visible('@autopilotLearnMore', 'Learn More')
            .waitForElementPresent('@autopilotExpandButton',10000)
            .click('@autopilotExpandButton')
            .pause(1000)
            .verify.visible('@autopilotVerify', 'Features')
            .click ('@verifyClose')

            .moveToElement('@moveToInterior',1,1)
            .waitForElementPresent('@interior',10000)
            .click('@interior')
            .pause(2000)
            .verify.visible('@interiorHeader', 'Interior')
            .verify.visible('@interiorText', 'Built Around the Driver')
            .verify.visible('@interiorLearnMore', 'Learn More')
            .waitForElementPresent('@interiorExpandButton',10000)
            .click('@interiorExpandButton')
            .pause(1000)
            .click ('@verifyClose')

            .moveToElement('@moveToExterior',1,1)
            .waitForElementPresent('@exterior',10000)
            .click('@exterior')
            .pause(2000)
            .verify.visible('@exteriorHeader', 'Exterior')
            .verify.visible('@exteriorText', 'Designed for Efficiency')
            .verify.visible('@exteriorLearnMore', 'Learn More')
            .waitForElementPresent('@exteriorExpandButton',10000)
            .click('@exteriorExpandButton')
            .pause(1000)
            .verify.visible('@exteriorVerify', 'Signature Colors')
            .click ('@verifyClose')

            .moveToElement('@moveToSpecs',1,1)
            .waitForElementPresent('@specs',10000)
            .click('@specs')
            .pause(2000)
            .verify.visible('@specsHeader', 'Specs')
            .verify.visible('@specsButtonText1', 'Performance')
            .verify.visible('@specsButtonText2', 'Long Range')
            .verify.visible('@specsButtonText3', 'Standard Range')
            .pause(1000)
            .click('@specsButtonText2')
            .verify.visible('@specsVerifyAccel2', '3.7 seconds 0-60 mph')
            .verify.visible('@specsVerifyRange2', '370 miles (EPA est.)')
            .pause(1000)
            .click('@specsButtonText3')
            .verify.visible('@specsVerifyAccel3', '4.0 seconds 0-60 mph')
            .verify.visible('@specsVerifyRange3', '285 miles (EPA est.)')
            .pause(1000)
            .click('@specsButtonText1')
            .verify.visible('@specsVerifyAccel1', '2.4 seconds 0-60 mph')
            .verify.visible('@specsVerifyRange1', '345 miles (EPA est.)')
            .verify.visible('@specsLearnMore', 'Expand List')
            .waitForElementPresent('@specsExpandButton',10000)
            .click('@specsExpandButton')
            .pause(1000)
            .verify.visible('@specsVerify', 'front')
            .click ('@verifyClose')

            .moveToElement('@moveToOrder',1,1)
            .waitForElementPresent('@order',10000)
            .click('@order')
            .pause(2000)
            .verify.visible('@orderHeader', 'Order Model S')
            .verify.visible('@orderButtonText', 'Order Now')
            .click('@orderButtonText')
            .waitForElementPresent('@orderPageVerify',10000)
            .verify.visible('@orderPageVerify', 'Select Your Car')
            .pause(1000)
          

    }
}