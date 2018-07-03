(function(){

    'use strict';
    
    require('angular');
    
    angular.module("myApp").directive("userInfo", UserInfoDirective);

    function UserInfoDirective() {
        return {
            restrict: "E",
            templateUrl: "/app/components/user-info/user-info.component.html",
            scope: {
                customer: "=",
                initialCollapsed: "@collapsed"
            },
            controller: ['$scope', function($scope) {
                $scope.collapsed = ($scope.initialCollapsed === 'true');
                $scope.upgrade = function(customer) {
                    customer.status = "Upgraded";
                }
                $scope.collapse = function() {
                    $scope.collapsed = !$scope.collapsed;
                }
                $scope.deleting = false;
                $scope.startDelete = function() {
                    $scope.deleting = true;
                }
                $scope.cancelDelete = function() {
                    $scope.deleting = false;
                }
                $scope.deleteWish = function(wish) {
                    var index = $scope.customer.wishlist.indexOf(wish);
                    if( index > -1) {
                        $scope.customer.wishlist.splice(index,1);
                    }
                }
            }]
        };
    }
})();