var myApp = angular.module('myApp');

myApp.controller('MapController', ['$scope', 'SelectedType', 'SelectedPlace', 'Open', 'Price', function ($scope, SelectedType, SelectedPlace, Open, Price) {
    let place, type, open, price, map, infowindow, service, placeLoc, marker;

    place = SelectedPlace.place;
    type = SelectedType.type;
    open = Open.open;
    minPrice = Price.minPrice;
    maxPrice = Price.maxPrice;
    map = new google.maps.Map(document.getElementById('map'), {
        center: place,
        zoom: 13
    });
    infowindow = new google.maps.InfoWindow();
    service = new google.maps.places.PlacesService(map);

    if (open == 'false') {
        service.nearbySearch({
            location: place,
            radius: 10000,
            types: [`${type}`],
            minPriceLevel: `${minPrice}`
        }, callback);
    } else {
        service.nearbySearch({
            location: place,
            radius: 10000,
            types: [`${type}`],
            openNow:`${open}`,
            minPriceLevel: `${minPrice}`,
            maxPriceLevel: `${maxPrice}`
        }, callback);
    }

    function callback(results, status) {

        if (status === google.maps.places.PlacesServiceStatus.OK) {

            for (var i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
        }
    }

    function createMarker(place) {
        placeLoc = place.geometry.location;
        marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent(place.name);
            infowindow.open(map, this);
        });
    }
}]);