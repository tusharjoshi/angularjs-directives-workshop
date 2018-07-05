(function(){

    'use strict';
    
    var $ = require('jquery');
    require('angular');
    
    angular.module('myApp').controller('MyController', MyController);

    MyController.$inject = ['$scope'];

    function MyController($scope) {
        $scope.items = [1, 2, 3, 4, 89];
    }

    angular.module('myApp').directive('myLazyRender', MyLazyRenderDirective);

    function MyLazyRenderDirective() {
        return {
            restrict: 'A',
            transclude: 'element',
            priority: 5000,
            link: MyLazyRenderDirectiveLink
        };
    }

    function MyLazyRenderDirectiveLink(scope, el, attrs, ctrl, transclude) {
        var hasBeenShown = false;
        var unwatchFn = scope.$watch(attrs.myLazyRender, function(newVal) {
            if( newVal && !hasBeenShown) {
                hasBeenShown = true;
                transclude(scope, function(clone) {
                    $(el).after(clone);
                });
                unwatchFn();
            }
        });
    }
})();