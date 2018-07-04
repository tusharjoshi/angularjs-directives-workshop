(function(){

    'use strict';
    
    require('angular');
    
    angular.module("myApp").directive("deleteAction", DeleteActionDirective);

    function DeleteActionDirective() {
        return {
            restrict: "E",
            templateUrl: "/app/components/delete-action/delete-action.component.html",
            scope: {
                onDelete: "&onDelete"
            },
            controller: ['$scope', DeleteActionDirectiveController]
        };
    }

    function DeleteActionDirectiveController($scope) {
        $scope.deleting = false;
        $scope.startDelete = function() {
            $scope.deleting = true;
        }
        $scope.cancelDelete = function() {
            $scope.deleting = false;
        }
        $scope.confirmDelete = function() {
            $scope.onDelete();
        }        
    }
})();