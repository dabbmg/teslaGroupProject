let accFeatures = require('../test-assets/accFeatures')
let footers = require('../test-assets/footers')
let genBrowse = require('../test-assets/genBrowse')
let headerFilter = require('../test-assets/headerFilter')
let searchBar = require('../test-assets/searchBar')
let skip = require('../test-assets/skip')
let genBrowseMobile = require('../test-assets/genBrowseMobile')
//
var shopCommands = {
    accFeat: function(shopPage) {
        accFeatures(shopPage)
        return this
    },
    foot: function(shopPage) {
        footers(shopPage)
        return this
    },
    browse: function(shopPage) {
        genBrowse(shopPage)
        return this
    },
    headFilt: function(shopPage) {
        headerFilter(shopPage)
        return this
    },
    search: function(shopPage, searchTerm) {
        searchBar(shopPage, searchTerm)
        return this
    },
    skp: function(shopPage) {
        skip(shopPage)
        return this
    },
    mobile: function(shopPage) {
        genBrowseMobile(shopPage)
        return this
    }
}
module.exports = {
    url: 'https://shop.tesla.com',
    commands: [shopCommands],
    elements: {
    }
}