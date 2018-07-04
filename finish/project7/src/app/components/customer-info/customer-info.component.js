(function(){

    'use strict';
    
    var $ = require('jquery');
    require('angular');
    
    angular.module("myApp").directive("customerInfo", CustomerInfoDirective);

    function CustomerInfoDirective() {
        return {
            restrict: "E",
            templateUrl: "/app/components/customer-info/customer-info.component.html",
            scope: {
                person: "=",
                initialCollapsed: "@collapsed"
            },
            controller: ['$scope', CustomerInfoDirectiveController]
        };
    }

    function CustomerInfoDirectiveController($scope) {
        $scope.upgrade = function(person) {
            person.status = "Upgraded";
        }   
        $scope.deleteWish = function(wish) {
            var index = $scope.person.wishlist.indexOf(wish);
            if( index > -1) {
                $scope.person.wishlist.splice(index,1);
            }
        }   
    }
    
})();