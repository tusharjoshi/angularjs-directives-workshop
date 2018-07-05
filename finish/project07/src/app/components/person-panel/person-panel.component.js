(function(){

    'use strict';
    
    var $ = require('jquery');
    require('angular');
    
    angular.module("myApp").directive("personPanel", PersonPanelDirective);

    function PersonPanelDirective() {
        return {
            restrict: "E",
            templateUrl: "/app/components/person-panel/person-panel.component.html",
            transclude: true,
            scope: {
                name: "@",
                level: "=",
                initialCollapsed: "@collapsed"
            },
            controller: ['$scope', PersonPanelDirectiveController]
        };
    }

    function PersonPanelDirectiveController($scope) {
        $scope.collapsed = ($scope.initialCollapsed === 'true');
        $scope.collapse = function() {
            $scope.collapsed = !$scope.collapsed;
        }     
        $scope.nextState = function(evt) {
            evt.stopPropagation();
            evt.preventDefault();
            $scope.level++;
            $scope.level = $scope.level % 4;
        };   
    }
    
})();