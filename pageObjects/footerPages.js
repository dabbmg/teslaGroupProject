module.exports = {
    url: 'https://www.tesla.com/',
    elements: {
            header: '[class="tds-header-main--logo"]',
            logo: '[tds-header-main--logo]',
            tesla: { 
                selector: '(//*[@class="tds-footer-list_link"])[1]',
                locateStrategy: 'xpath'
            },
            privacyLegal: { 
                selector: '(//*[@class="tds-footer-list_link"])[2]',
                locateStrategy: 'xpath'
            },
            contact: { 
                selector: '(//*[@class="tds-footer-list_link"])[3]',
                locateStrategy: 'xpath'
            },
            careers: { 
                selector: '(//*[@class="tds-footer-list_link"])[4]',
                locateStrategy: 'xpath'
            },
            newsLetter: { 
                selector: '(//*[@class="tds-footer-list_link"])[5]',
                locateStrategy: 'xpath'
            },
            forums: { 
                selector: '(//*[@class="tds-footer-list_link"])[6]',
                locateStrategy: 'xpath'
            },
            locations: { 
                selector: '(//*[@class="tds-footer-list_link"])[7]',
                locateStrategy: 'xpath'
            },
            sectionHeader: { 
                selector: '(//*[@class="container"])[3]',
                locateStrategy: 'xpath'
            },
            sectionDesc: {
                selector: '(//p[@id="form-section-description"]',
                locateStrategy: 'Xpath'
            },
            forumsHeader: '.page-title-header'

            
        }

}