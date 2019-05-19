const CountryView = require('./views/country_view.js')
const SelectView = require('./views/select_view.js')
const Countries = require('./models/countries.js')


document.addEventListener('DOMContentLoaded', () => {
    console.log('javascript loaded');

    const countryDropdown = document.querySelector('select#country-select')
    const countrySelectView = new SelectView(countryDropdown)
    countrySelectView.bindEvents()

    const countryInfo = document.querySelector('section#country-info')
    const countryView = new CountryView(countryInfo)
    countryView.bindEvents()

    const countries = new Countries('https://restcountries.eu/rest/v2/regionalbloc/au')
    countries.getData()
    countries.bindEvents()

    
})