(function(){

    'use strict';

    require('angular');

    angular.module('myApp', []);
    require('./app');
    require('./components/magician/magician.component');
    require('./components/delete-wish/delete-wish.component');
    require('./components/user-info/user-info.component');
})();