(function(){

    'use strict';
    
    require('angular');
    
    angular.module('myApp').controller('MyController', MyController);

    MyController.$inject = ['$scope'];

    function MyController($scope) {
        $scope.message = "This is a message.";
    }
})();