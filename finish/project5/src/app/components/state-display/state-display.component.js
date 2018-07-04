(function(){

    'use strict';
    
    var $ = require('jquery');
    require('angular');
    
    angular.module("myApp").directive("stateDisplay", StateDisplayDirective);

    function StateDisplayDirective() {
        return {
            link: StateDisplayDirectiveLink
        };
    }

    function StateDisplayDirectiveLink(scope, el, attrs) {
        scope.$watch(attrs['stateDisplay'], function(newVal) {
            var stateColor;
            switch(newVal) {
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
            el.css('background-color', stateColor);
        });  
    }

})();