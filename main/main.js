var myApp = angular.module('myApp');

myApp.factory('SelectedPlace', function () {
    return {place: 'holi'}
});

myApp.controller('MainController', function ($scope, SelectedPlace) {
    let place, newLatitude, newLength, map, ac, newPlace;

    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -32.9442426, lng: -60.65053879999999},
      zoom: 13
    });
    ac = new google.maps.places.Autocomplete(document.getElementById('autocomplete'));
    
    google.maps.event.addListener(ac, 'place_changed', function() {
        place = ac.getPlace();
        console.log(place.formatted_address);
        console.log(place.url);
        newLatitude = place.geometry.location.lat();
        newLength = place.geometry.location.lng();
        newPlace = new google.maps.LatLng(newLatitude, newLength);
        map.setCenter(newPlace);
        SelectedPlace.place = newPlace;
        console.log(SelectedPlace.place);
    });
});
