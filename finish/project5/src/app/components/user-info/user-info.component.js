(function(){

    'use strict';
    
    var $ = require('jquery');
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
            link: UserInfoDirectiveLink,
            controller: ['$scope', UserInfoDirectiveController]
        };
    }

    function UserInfoDirectiveController($scope) {
        $scope.collapsed = ($scope.initialCollapsed === 'true');
        $scope.upgrade = function(customer) {
            customer.status = "Upgraded";
        }
        $scope.collapse = function() {
            $scope.collapsed = !$scope.collapsed;
        }   
        $scope.deleteWish = function(wish) {
            var index = $scope.customer.wishlist.indexOf(wish);
            if( index > -1) {
                $scope.customer.wishlist.splice(index,1);
            }
        }     
    }

    function UserInfoDirectiveLink(scope, el, attrs) {
        scope.nextState = function() {
            scope.customer.level++;
            scope.customer.level = scope.customer.level % 3;
            setState();
        };            

        function setState() {
            var stateColor;
            switch(scope.customer.level) {
                case 0:
                    stateColor = 'white';
                    break;
                case 1:
                    stateColor = 'yellow';
                    break;
                case 2:
                    stateColor = 'red';
                    break;
            }
            $(el).find('.panel-body').css('background-color', stateColor);
        }

        setState();
    }
})();