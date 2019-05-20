const PubSub = require('../helpers/pub_sub.js')
const RequestHelper = require('../helpers/request_helper')


const Countries = function(url){
    this.url = url
    this.countries = null
}

Countries.prototype.bindEvents = function(){
    PubSub.subscribe('SelectView:single-country-select', (event) =>{
        console.log('Countries subscribed to SelectView:single-country-select');
        countryIndex = event.detail
        countryDetails = this.countries[countryIndex]
        console.log('whole country: ', countryDetails);

        PubSub.publish('Countries:all-country-data', countryDetails)
        
        
    })
}

Countries.prototype.getData = function(){
    const data = new RequestHelper(this.url)
    data.get()
    .then((countryList) => {
        this.countries = countryList
        
        PubSub.publish('Countries:all-countries', this.countries)
        console.log('Countries has published Countries:all-countries');
        
    })
}


module.exports = Countries;