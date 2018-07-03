(function(){

    'use strict';
    
    require('angular');
    
    angular.module("myApp").directive("userInfo", UserInfoDirective);

    function UserInfoDirective() {
        return {
            restrict: "E",
            templateUrl: "/app/components/user-info/user-info.component.html",
            controller: ['$scope', function($scope) {
                $scope.upgrade = function(customer) {
                    customer.status = "Upgraded";
                }
            }]
        };
    }
})();