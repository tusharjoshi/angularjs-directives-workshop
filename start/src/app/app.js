(function(){

    'use strict';
    
    require('angular');
    
    angular.module('myApp').controller('MyController', MyController);

    function MyController($scope) {
        $scope.names = [
            {
            name: 'Sachin',
            age: '29'
            }, {
            name: 'Dhoni',
            age: '45'
            }, {
            name: 'Virat',
            age: '23'
            }
        ];
    }

    MyController.$inject = [ '$scope'];
})();