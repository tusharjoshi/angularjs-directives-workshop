(function(){

    'use strict';
    
    require('angular');
    
    angular.module('myApp').directive('pslPane', PslPaneDirective);

    function PslPaneDirective() {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                title: '@'
            },
            require: '^pslTabs',
            templateUrl: '/app/components/psl-pane/psl-pane.component.html',
            link: function(scope, el, attrs, pslTabsCtrl) {
                pslTabsCtrl.addPane(scope);
            }
        };
    }
})();