(function(){

    'use strict';
    
    require('angular');
    
    angular.module('myApp').controller('MyController', MyController);

    MyController.$inject = ['$scope'];

    function MyController($scope) {
        $scope.items = [1,2,3,67];
    }

    angular.module('myApp').directive('myTransclude', MyTranscludeDirective);

    function MyTranscludeDirective() {
        return {
            restrict: 'E',
            transclude: true,
            template: '<div ng-transclude />'
        };
    }
})();