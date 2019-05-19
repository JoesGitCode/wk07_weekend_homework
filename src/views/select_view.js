const PubSub = require('../helpers/pub_sub.js')

const SelectView = function(element){
    this.element = element
}

SelectView.prototype.bindEvents = function(){
    PubSub.subscribe('Countries:all-countries', (event) => {
        console.log('SelectView subscribed to Countries:all-countries');
        console.log(event.detail);
        
    this.element.addEventListener('change', (event) => {
        selectedIndex = event.target.value
        console.log(selectedIndex);

        PubSub.publish('SelectView:single-country-select', selectedIndex)
        console.log('SelectView published SelectView:single-country-select');
        
        
    })        
    })
}

module.exports = SelectView;