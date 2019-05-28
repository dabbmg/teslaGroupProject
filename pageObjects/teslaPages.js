module.exports = {
    url: 'https://www.tesla.com/models',
    elements: {
            header: '[class="tsla-header-nav--primary"]',
            logo: '[tds-header-main--logo]',
            models: { 
                selector: '(//*[text()="Model S"])[1]',
                locateStrategy: 'xpath'
            },
            sectionModelS: { 
                selector: '(//*[text()="Model S"])[2]',
                locateStrategy: 'xpath'
            },
            selected: { 
                selector: '(//li/div[@class="label"])[1]',
                locateStrategy: 'xpath'
            },
            moveToSafety: { 
                selector: '(//div[@class="main"])[2]',
                locateStrategy: 'xpath'
            },
            safety: { 
                selector: '(//*[@class="main"])[2]',
                locateStrategy: 'xpath'
            },
            moveToPerformance: { 
                selector: '(//div[@class="main"])[3]',
                locateStrategy: 'xpath'
            },
            performance: { 
                selector: '(//*[@class="main"])[3]',
                locateStrategy: 'xpath'
            },
            moveToRange: { 
                selector: '(//div[@class="main"])[4]',
                locateStrategy: 'xpath'
            },
            range: { 
                selector: '(//*[@class="main"])[4]',
                locateStrategy: 'xpath'
            },
            moveToAutopilot: { 
                selector: '(//div[@class="main"])[5]',
                locateStrategy: 'xpath'
            },
            autopilot: { 
                selector: '(//*[@class="main"])[5]',
                locateStrategy: 'xpath'
            },
            moveToInterior: { 
                selector: '(//div[@class="main"])[6]',
                locateStrategy: 'xpath'
            },
            interior: { 
                selector: '(//*[@class="main"])[6]',
                locateStrategy: 'xpath'
            },
            moveToExterior: { 
                selector: '(//div[@class="main"])[7]',
                locateStrategy: 'xpath'
            },
            exterior: { 
                selector: '(//*[@class="main"])[7]',
                locateStrategy: 'xpath'
            },
            moveToSpecs: { 
                selector: '(//div[@class="main"])[8]',
                locateStrategy: 'xpath'
            },
            specs: { 
                selector: '(//*[@class="main"])[8]',
                locateStrategy: 'xpath'
            },
            moveToOrder: { 
                selector: '(//div[@class="main"])[9]',
                locateStrategy: 'xpath'
            },
            order: { 
                selector: '(//*[@class="main"])[9]',
                locateStrategy: 'xpath'
            },

            verifyClose: { 
                selector: '(//*[@class="close-drawer-bottom close g-button-round-hover on-screen"])',
                locateStrategy: 'xpath'
            },

            // section selectors and text verify

            safetyHeader: { 
                selector: '//*[text()="Safety"]',
                locateStrategy: 'xpath'
            },
            safetyText: { 
                selector:'//*[text()="High Impact Protection"]',
                locateStrategy: 'xpath'
            },
            safetyExpandButton: { 
                selector: '(//*[@class="expand g-button-round-icon"])[1]',
                locateStrategy: 'xpath'
            },
            safetyLearnMore: { 
                selector: '(//*[@class="learn-more-label"])[1]',
                locateStrategy: 'xpath'
            },
            safetyVerify: { 
                selector: '(//*[text()="Active Safety"])[1]',
                locateStrategy: 'xpath'
            },

            performanceHeader: { 
                selector: '//*[text()="Performance"]',
                locateStrategy: 'xpath'
            },
            performanceText: { 
                selector: '//*[text()="Quickest Acceleration"]',
                locateStrategy: 'xpath'
            },
            performanceExpandButton: { 
                selector: '(//*[@class="expand g-button-round-icon"])[2]',
                locateStrategy: 'xpath'
            },
            performanceLearnMore: { 
                selector: '(//*[@class="learn-more-label"])[2]',
                locateStrategy: 'xpath'
            },
            performanceVerify: { 
                selector: '(//*[text()="Electric Powertrain"])[1]',
                locateStrategy: 'xpath'
            },
            performanceClose: { 
                selector: '(//*[@class="close-drawer-bottom close g-button-round-hover on-screen"])',
                locateStrategy: 'xpath'
            },

            rangeHeader: { 
                selector: '(//*[text()="Range"])[2]',
                locateStrategy: 'xpath'
            },
            rangeText: { 
                selector: '(//*[text()="Go Anywhere"])[1]',
                locateStrategy: 'xpath'
            },
            rangeExpandButton: { 
                selector: '(//*[@class="expand g-button-round-icon"])[3]',
                locateStrategy: 'xpath'
            },
            rangeLearnMore: { 
                selector: '(//*[@class="learn-more-label"])[3]',
                locateStrategy: 'xpath'
            },
            rangeVerify: { 
                selector: '(//*[text()="Go Anywhere"])[2]',
                locateStrategy: 'xpath'
            },

            autopilotHeader: { 
                selector: '(//*[text()="Autopilot"])[1]',
                locateStrategy: 'xpath'
            },
            autopilotText: { 
                selector: '(//*[text()="Future of Driving"])[1]',
                locateStrategy: 'xpath'
            },
            autopilotExpandButton: { 
                selector: '(//*[@class="expand g-button-round-icon"])[4]',
                locateStrategy: 'xpath'
            },
            autopilotLearnMore: { 
                selector: '(//*[@class="learn-more-label"])[4]',
                locateStrategy: 'xpath'
            },
            autopilotVerify: { 
                selector: '//*[text()="Features"]',
                locateStrategy: 'xpath'
            },

            interiorHeader: { 
                selector: '(//*[text()="Interior"])[1]',
                locateStrategy: 'xpath'
            },
            interiorText: { 
                selector: '//*[text()="Built Around the Driver"]',
                locateStrategy: 'xpath'
            },
            interiorExpandButton: { 
                selector: '(//*[@class="expand g-button-round-icon"])[5]',
                locateStrategy: 'xpath'
            },
            interiorLearnMore: { 
                selector: '(//*[@class="learn-more-label"])[5]',
                locateStrategy: 'xpath'
            },
            interiorVerify: { 
                selector: '(//*[text()="Better Over Time"])[1]',
                locateStrategy: 'xpath'
            },

            exteriorHeader: { 
                selector: '(//*[text()="Exterior"])[1]',
                locateStrategy: 'xpath'
            },
            exteriorText: { 
                selector: '//*[text()="Designed for Efficiency"]',
                locateStrategy: 'xpath'
            },
            exteriorExpandButton: { 
                selector: '(//*[@class="expand g-button-round-icon"])[6]',
                locateStrategy: 'xpath'
            },
            exteriorLearnMore: { 
                selector: '(//*[@class="learn-more-label"])[6]',
                locateStrategy: 'xpath'
            },
            exteriorVerify: { 
                selector: '(//*[text()="Signature Colors"])[1]',
                locateStrategy: 'xpath'
            },

            specsHeader: { 
                selector: '(//*[text()="Specs"])[1]',
                locateStrategy: 'xpath'
            },
            specsButtonText1: { 
                selector: '(//*[text()="Performance"])[3]',
                locateStrategy: 'xpath'
            },
            specsButtonText2: { 
                selector: '(//*[text()="Long Range"])[2]',
                locateStrategy: 'xpath'
            },
            specsButtonText3: { 
                selector: '(//*[text()="Standard Range"])[2]',
                locateStrategy: 'xpath'
            },
            specsExpandButton: { 
                selector: '(//*[@class="expand g-button-round-icon"])[7]',
                locateStrategy: 'xpath'
            },
            specsLearnMore: { 
                selector: '(//*[@class="learn-more-label"])[7]',
                locateStrategy: 'xpath'
            },
            specsVerify: { 
                selector: '//*[@class="front"]',
                locateStrategy: 'xpath'
            },
            specsVerifyAccel1: { 
                selector: '(//*[@class="tv vP100D"])[2]',
                locateStrategy: 'xpath'
            },
            specsVerifyRange1: { 
                selector: '(//*[@class="tv vP100D"])[3]',
                locateStrategy: 'xpath'
            },
            specsVerifyAccel2: { 
                selector: '(//*[@class="tv v100D"])[2]',
                locateStrategy: 'xpath'
            },
            specsVerifyRange2: { 
                selector: '(//*[@class="tv v100D"])[3]',
                locateStrategy: 'xpath'
            },
            specsVerifyAccel3: { 
                selector: '(//*[@class="tv v75D"])[2]',
                locateStrategy: 'xpath'
            },
            specsVerifyRange3: { 
                selector: '(//*[@class="tv v75D"])[3]',
                locateStrategy: 'xpath'
            },

            orderHeader: { 
                selector: '//*[@class="section-title"]',
                locateStrategy: 'xpath'
            },
            orderButtonText: { 
                selector: '//*[@class="order g-order-button large-button"]',
                locateStrategy: 'xpath'
            },
            orderPageVerify: { 
                selector: '//*[text()="Select Your Car"]',
                locateStrategy: 'xpath'
            },

            
        }

}

