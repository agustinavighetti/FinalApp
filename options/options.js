var myApp = angular.module('myApp');

myApp.factory('Open', function () {
    return {open: ''}
});

myApp.factory('Price', function () {
    return {minPrice: '', maxPrice:''}
});

myApp.controller('OptionsController', ['$scope', 'Open', 'Price', function ($scope, Open, Price) {
    let options, optionSelected;

    $scope.startSearching = function () {
        optionSelected = null;
        options = document.getElementsByName('open');

        for (var i = 0; i < options.length; i++) {

            if(options[i].checked) {
            
                optionSelected = options[i].value;
            }
        }

        Open.open = optionSelected;

        optionSelected = null;
        options = document.getElementsByName('minPrice');

        for (var i = 0; i < options.length; i++) {

            if(options[i].checked) {
            
                optionSelected = options[i].value;
            }
        }

        Price.minPrice = optionSelected;
        
        optionSelected = null;
        options = document.getElementsByName('maxPrice');

        for (var i = 0; i < options.length; i++) {

            if(options[i].checked) {
            
                optionSelected = options[i].value;
            }
        }

        Price.maxPrice = optionSelected;   
    }
}]);