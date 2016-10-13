var myApp = angular.module('myApp', ['ngRoute', 'angularCSS']);

myApp.config(['$routeProvider', function ($routeProvider) {
    console.log('hola config');
    $routeProvider
    .when('/', {
        templateUrl: '/main/main.html',
        controller: "MainController",
        css: 'main/main.css'
    })
    .when('/places', {
        templateUrl: '/places/places.html',
        controller: "PlacesController",
        css: 'main/main.css'
    })
    .when('/favorites', {
        templateUrl: '/views/favorites.html',
        controller: "FavoritesController",
        css: 'main/main.css'
    })
    .when('/pending', {
        templateUrl: '/views/pending.html',
        controller: "PlacesController",
        css: 'main/main.css'
    })
    .when('/recommendations', {
        templateUrl: '/views/recommendations.html',
        controller: "PlacesController",
        css: 'main/main.css'
    })
    .when('/search', {
        templateUrl: '/views/search.html',
        controller: "PlacesController",
        css: 'main/main.css'
    })
    .when('/configurations', {
        templateUrl: '/views/configurations.html',
        controller: "PlacesController",
        css: 'main/main.css'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);