(function(){

    'use strict';

    require('jquery');
    require('angular');
    
    angular.module("myApp").directive("eventPause", EventPauseDirective);

    function EventPauseDirective() {
        return {
            restrict: 'A',
            scope: {
                eventPause: '&'
            },
            link: EventPauseDirectiveLink
        };
    }

    function EventPauseDirectiveLink(scope, el, attrs) {
        el.on('pause', function(event) {
            scope.$apply(function() {
                scope.eventPause();
            });
        });    
    }
})();