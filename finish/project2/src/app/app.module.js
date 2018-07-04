(function(){

    'use strict';

    require('jquery');
    require('angular');

    angular.module('myApp', []);
    require('./app');
    
    require('./components/spacebar-support/spacebar-support.component');
    require('./components/event-pause/event-pause.component');
})();