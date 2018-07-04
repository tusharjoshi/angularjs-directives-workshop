(function(){

    'use strict';
    
    require('angular');
    
    angular.module("myApp").directive("fontScale", FontScaleDirective);

    function FontScaleDirective() {
        return {
            link: function(scope, el, attrs) {
                scope.$watch(attrs['fontScale'], function(newVal) {
                    el.css('font-size', newVal + '%');
                });
            }
        };
    }
    
})();