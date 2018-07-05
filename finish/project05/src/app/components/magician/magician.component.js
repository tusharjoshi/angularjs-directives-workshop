(function(){

    'use strict';
    
    require('angular');
    
    angular.module("myApp").directive("magician", MagicianDirective);

    function MagicianDirective() {
        return {
            restrict: "E",
            templateUrl: "/app/components/magician/magician.component.html"
        };
    }
})();