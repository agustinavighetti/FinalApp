var myApp = angular.module('myApp', ['ngRoute', 'angularCSS']);

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: '/main/main.html',
        controller: "MainController",
        css: 'main/main.css'
    })
    .when('/map', {
        templateUrl: '/map.html',
        controller: "MapController",
        css: 'map.css'
    })
    .when('/places', {
        templateUrl: '/places/places.html',
        controller: "PlacesController",
        css: 'places/places.css'
    })
    .when('/options', {
        templateUrl: '/options/options.html',
        controller: "OptionsController",
        css: 'options/options.css'
    })
    // .when('/favorites', {
    //     templateUrl: '/favorites/favorites.html',
    //     controller: "FavoritesController",
    //     css: 'main/main.css'
    // })
    // .when('/pending', {
    //     templateUrl: '/pending/pending.html',
    //     controller: "PlacesController",
    //     css: 'main/main.css'
    // })
    .when('/search', {
        templateUrl: '/search/search.html',
        controller: "SearchController",
        css: 'search/search.css'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);

function unchecked () {
    document.getElementById('menu-toggle').checked = false;
}