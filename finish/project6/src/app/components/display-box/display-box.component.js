(function(){

    'use strict';
    
    var $ = require('jquery');
    require('angular');
    
    angular.module("myApp").directive("displayBox", DisplayBoxDirective);

    function DisplayBoxDirective() {
        return {
            restrict: 'E',
            templateUrl: "/app/components/display-box/display-box.component.html",
            controller: ['$scope', DisplayBoxDirectiveController],
            transclude: true
        };
    }

    function DisplayBoxDirectiveController($scope) {
        $scope.hidden = false;
        $scope.close = function() {
            $scope.hidden = true;
        };
    }

})();