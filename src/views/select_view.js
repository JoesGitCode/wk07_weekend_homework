const PubSub = require('../helpers/pub_sub.js')

const SelectView = function(){

}

SelectView.prototype.bindEvents = function(){
    PubSub.subscribe('Countries:all-countries', (event) => {
        console.log('SelectView subscribed to Countries:all-countries');
        const allCountries = event.detail
        this.getCountries(allCountries)
        
    })
}

module.exports = SelectView;