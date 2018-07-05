(function(){

    'use strict';
    
    require('angular');
    
    angular.module('myApp').directive('pslTabs', PslTabsDirective);

    function PslTabsDirective() {
        return {
            restrict: 'E',
            transclude: true,
            scope: {},
            controller: function($scope) {
                $scope.panes = [];
                $scope.select = function(pane) {
                    pane.selected = true;
                    $scope.panes.forEach(function(curPane) {
                        if( curPane !== pane) {
                            curPane.selected = false;
                        }
                    });
                }

                this.addPane = function(pane) {
                    $scope.panes.push(pane);
                    if( $scope.panes.length === 1 ) {
                        pane.selected = true;
                    }
                }
            },
            templateUrl: '/app/components/psl-tabs/psl-tabs.component.html'
        }
    }

})();