const PubSub = require('../helpers/pub_sub.js')


const CountryView = function(container){
    this.container = container
}

CountryView.prototype.bindEvents = function(){
    PubSub.subscribe('Countries:all-country-data', (event) => {
        console.log('CountryView subscribed to Countries:all-country-data');
        
        console.log('should be all of a countrys data?', event.detail);
        this.render(event.detail)
        this.renderMap(event.detail)
        
    })
}

CountryView.prototype.render = function(countryInfo){

    this.container.innerHTML = ''

    const countryName = document.createElement('h2')
    countryName.textContent = `Name: ${countryInfo.name}`
    this.container.appendChild(countryName)

    


   
}

CountryView.prototype.renderMap = function(countryInfo){
    const countryLatitude = countryInfo.latlng[0]
    const countryLongitude = countryInfo.latlng[1]
    console.log('latlng: ', countryLatitude, countryLongitude)

    var mymap = L.map('mapid').setView([countryLatitude,
        countryLongitude], 6);

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
          '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
          'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox.streets'
  }).addTo(mymap);
}



module.exports = CountryView;