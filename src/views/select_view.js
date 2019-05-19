const PubSub = require('../helpers/pub_sub.js')

const SelectView = function(element){
    this.element = element
}

SelectView.prototype.bindEvents = function(){
    PubSub.subscribe('Countries:all-countries', (event) => {
        console.log('SelectView subscribed to Countries:all-countries');
        const allCountriesInfo = event.detail
        console.log(event.detail);
        this.getEachCountryName(allCountriesInfo)
        
    this.element.addEventListener('change', (event) => {
        selectedCountryName = event.target.value
        console.log('selected country name: ', event.target.value);

        PubSub.publish('SelectView:single-country-select', selectedCountryName)
        console.log('SelectView published SelectView:single-country-select');
        
        
    })        
    })

}

SelectView.prototype.getEachCountryName = function(countries){
    countries.forEach((country) => {
        const option = document.createElement('option')
        option.textContent = country.name
        this.element.appendChild(option)
    })
}

module.exports = SelectView;