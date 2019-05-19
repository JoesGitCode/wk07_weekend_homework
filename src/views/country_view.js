const PubSub = require('../helpers/pub_sub.js')


const CountryView = function(container){
    this.container = container
}

CountryView.prototype.bindEvents = function(){
    PubSub.subscribe('Countries:all-country-data', (event) => {
        console.log('CountryView subscribed to Countries:all-country-data');
        
        console.log('should be all of a countrys data?', event.detail);
        this.render(event.detail)
        
    })
}

CountryView.prototype.render = function(countryInfo){
    const countryName = document.createElement('h2')
    countryName.textContent = `Name: ${countryInfo.name}`
    this.container.appendChild(countryName)
}



module.exports = CountryView;