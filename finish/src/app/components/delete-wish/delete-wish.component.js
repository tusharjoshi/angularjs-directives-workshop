(function(){

    'use strict';
    
    require('angular');
    
    angular.module("myApp").directive("deleteWish", DeleteWishDirective);

    function DeleteWishDirective() {
        return {
            restrict: "E",
            templateUrl: "/app/components/delete-wish/delete-wish.component.html",
            scope: {
                notifyParent: "&method"
            },
            controller: ['$scope', DeleteWishDirectiveController]
        };
    }

    function DeleteWishDirectiveController($scope) {
        $scope.deleting = false;
        $scope.startDelete = function() {
            $scope.deleting = true;
        }
        $scope.cancelDelete = function() {
            $scope.deleting = false;
        }
        $scope.confirmDelete = function() {
            $scope.notifyParent();
        }        
    }
})();