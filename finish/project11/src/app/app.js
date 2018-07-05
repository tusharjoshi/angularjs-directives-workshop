(function(){

    'use strict';
    
    require('angular');
    
    angular.module('myApp').controller('MyController', MyController);

    MyController.$inject = [ '$scope'];

    function MyController($scope) {
        $scope.customer1 = {
            name: "Amitabh Bachchan",
            type: "Premium",
            wishlist: [
                "Surfing",
                "Trekking",
                "Driving"
            ],
            level: 0
        }          
        
        $scope.customer2 = {
            name: "Rajesh Khanna",
            type: "Basic",
            wishlist: [
                "Boating",
                "Flying",
                "Scooba diving"
            ],
            level: 1
        }  
    }
})();