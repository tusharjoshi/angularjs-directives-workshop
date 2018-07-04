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
        var parameters = attrs['stateDisplay'].split(' ');
        var linkVar = parameters[0];
        scope.$watch(linkVar, function(newVal) {
            el.css('background-color', parameters[newVal + 1]);
        });  
    }

})();