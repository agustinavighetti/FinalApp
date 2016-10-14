var myApp = angular.module('myApp');

myApp.factory('SelectedType', function () {
    return {type: 'El tipo'}
});

myApp.controller('PlacesController', ['$scope', 'SelectedType', function ($scope, SelectedType) {
    var type;

    $scope.selectedCategory = function (category) {
        SelectedType.type = category;
    }

}]);