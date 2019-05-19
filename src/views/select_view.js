const PubSub = require('../helpers/pub_sub.js')

const SelectView = function(element){
    this.element = element
}

SelectView.prototype.bindEvents = function () {
    PubSub.subscribe('Countries:all-countries', (evt) => {
        console.log('SelectView subscribed to Countries:all-countries');
      this.populate(evt.detail)
    });
  
    this.element.addEventListener('change', (evt) => {
      const selectedIndex = evt.target.value;
      console.log(selectedIndex);
      
      PubSub.publish('SelectView:single-country-select', selectedIndex);
      console.log('SelectView published SelectView:single-country-select');
      
    })
  };
  
  SelectView.prototype.populate = function (countries) {
    countries.forEach((country, index) => {
      const countryOption = this.createOption(country.name, index);
      this.element.appendChild(countryOption);
    });
  };
  
  SelectView.prototype.createOption = function (name, index) {
    const option = document.createElement('option');
    option.textContent = name;
    option.value = index;
    return option;
  };

module.exports = SelectView;