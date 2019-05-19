const CountryView = require('./views/country_view.js')
const SelectView = require('./views/select_view.js')
const Countries = require('./models/countries.js')


document.addEventListener('DOMContentLoaded', () => {
    console.log('javascript loaded');


    const countries = new Countries('https://restcountries.eu/rest/v2/regionalbloc/au')
    countries.getData()

    
})