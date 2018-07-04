(function(){

    'use strict';
    
    require('angular');
    
    angular.module("myApp").directive("myClick", MyClickDirective);

    MyClickDirective.$inject = ['$parse'];

    function MyClickDirective($parse) {
        return function(scope, el, attrs) {
           var fn = $parse(attrs['myClick']);
           el.on('click', function(){
            scope.$apply(function (){
                fn(scope);
            });
           });
        };
    }
    
})();