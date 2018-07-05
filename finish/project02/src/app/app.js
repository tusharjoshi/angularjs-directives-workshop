(function(){

    'use strict';
    
    require('angular');
    
    angular.module('myApp').controller('MyController', MyController);

    MyController.$inject = [ '$scope'];

    function MyController($scope) {
        $scope.handlePause = function() {
            console.log('video was paused');
        }
    }
})();