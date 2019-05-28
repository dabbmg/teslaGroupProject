module.exports = (browser) => {
    browser
    .verify.containsText('a[title="Charging"]', 'C')
}