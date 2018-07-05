(function(){

    'use strict';

    require('angular');

    angular.module('myApp', []);
    require('./app');
    require('./components/delete-action/delete-action.component');
    require('./components/user-info/user-info.component');
    require('./components/state-display/state-display.component');
})();