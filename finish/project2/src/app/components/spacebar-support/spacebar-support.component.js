(function(){

    'use strict';

    require('jquery');
    require('angular');
    
    angular.module("myApp").directive("spacebarSupport", SpacebarSupportDirective);

    function DeleteActionDirective() {
        return {
            restrict: "A:",
            link: SpacebarSupportDirectiveLink
        };
    }

    function SpacebarSupportDirectiveLink(scope, el, attrs) {
        $('body').on('keypress', function(evt){
            var videoElement = el[0];
            if( evt.keyCode === 32 ) {
                if( videoElement.paused) {
                    videoElement.play();
                } else {
                    videoElement.pause();
                }
            }
        });    
    }
})();