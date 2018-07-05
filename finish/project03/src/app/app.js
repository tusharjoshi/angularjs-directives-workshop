(function(){

    'use strict';
    
    require('angular');
    
    angular.module('myApp').controller('MyController', MyController);

    MyController.$inject = ['$scope'];

    function MyController($scope) {
        $scope.data = {
            message: "Message not clicked yet"
        };

        $scope.clickHandler = function(p) {
            p.message = "Message has been clicked now";
        };
    }
})();