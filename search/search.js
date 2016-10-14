var myApp = angular.module('myApp');

myApp.factory('SearchQuery', function () {
    return {query: ''}
});

myApp.controller('SearchController', ['$scope', 'SelectedPlace', function ($scope, SelectedPlace) {
    let map, service, infowindow, place, placeLoc, marker, markersArray;

    place = SelectedPlace.place;
    infowindow = new google.maps.InfoWindow();
    markersArray = [];
    map = new google.maps.Map(document.getElementById('map'), {
        center: place,
        zoom: 15
      });

    $scope.searchPlaces = function () {

        if (markersArray.length > 0) {
            clearOverlays();
        }

        query = $scope.query;
        var request = {
          location: place,
          radius: '500',
          query: `${query}`
        };
        service = new google.maps.places.PlacesService(map);
        service.textSearch(request, callback);

        function callback(results, status) {

            if (status == google.maps.places.PlacesServiceStatus.OK) {

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
            markersArray.push(marker);
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.setContent(place.name);
                infowindow.open(map, this);
            });
        }

        function clearOverlays() {

            for (var i = 0; i < markersArray.length; i++ ) {
                markersArray[i].setMap(null);
            }

            markersArray.length = 0;
        }
    }
}]);