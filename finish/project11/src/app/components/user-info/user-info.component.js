(function(){

    'use strict';
    
    var $ = require('jquery');
    require('angular');
    
    angular.module("myApp").directive("userInfo", UserInfoDirective);

    function UserInfoDirective() {
        return {
            restrict: "E",
            templateUrl: "/app/components/user-info/user-info.component.html",
            scope:{
                customer: '=',
                initialCollapsed: '@collapsed'
            },
            controllerAs: 'vm',
            bindToController: true,
            controller: UserInfoDirectiveController
        };
    }

    function UserInfoDirectiveController($scope) {
        this.collapsed = (this.initialCollapsed === 'true');
        this.upgrade = function(customer) {
            customer.status = "Upgraded";
        }
        this.collapse = function() {
            this.collapsed = !this.collapsed;
        }   
        this.deleteWish = function(wish) {
            var index = this.customer.wishlist.indexOf(wish);
            if( index > -1) {
                this.customer.wishlist.splice(index,1);
            }
        }   
        this.nextState = function() {
            this.customer.level++;
            this.customer.level = this.customer.level % 4;
        };   
    }
    
})();