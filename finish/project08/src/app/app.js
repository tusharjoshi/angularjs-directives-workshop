(function(){

    'use strict';

    var $ = require('jquery');
    
    require('angular');
    
    angular.module('myApp').controller('MyController', MyController);

    MyController.$inject = ['$scope'];

    function MyController($scope) {
        $scope.items = [1,2,3,67];
    }

    angular.module('myApp').directive('myTransclude', MyTranscludeDirective);

    function MyTranscludeDirective() {
        return {
            restrict: 'A',
            transclude: 'element',
            link: MyTranscludeDirectiveLink
        };
    }

    function MyTranscludeDirectiveLink(scope, el, attrs, ctrl, transclude) {
        console.log(el[0]);
        transclude(scope, function(clone){
            $(el).after(clone);
        });
    }
})();