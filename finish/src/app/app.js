(function(){

    'use strict';
    
    require('angular');
    
    angular.module('myApp').controller('MyController', MyController);

    MyController.$inject = [ '$scope'];

    function MyController($scope) {
        $scope.customer = {
            name: "Amitabh Bachchan",
            type: "Premium",
            wishlist: [
                "Surfing",
                "Trekking",
                "Driving"
            ]
        }        
    }
})();