(function(){

    'use strict';

    require('angular');

    angular.module('myApp', []);
    
    require('./app');
    require('./components/delete-action/delete-action.component');
    require('./components/person-panel/person-panel.component');
    require('./components/customer-info/customer-info.component');
    require('./components/employee-info/employee-info.component');
    require('./components/state-display/state-display.component');
})();