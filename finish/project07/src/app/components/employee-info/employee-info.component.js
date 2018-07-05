(function(){

    'use strict';
    
    var $ = require('jquery');
    require('angular');
    
    angular.module("myApp").directive("employeeInfo", EmployeeInfoDirective);

    function EmployeeInfoDirective() {
        return {
            restrict: "E",
            templateUrl: "/app/components/employee-info/employee-info.component.html",
            scope: {
                person: "=",
                initialCollapsed: "@collapsed"
            },
            controller: ['$scope', EmployeeInfoDirectiveController]
        };
    }

    function EmployeeInfoDirectiveController($scope) {
        $scope.upgrade = function(person) {
            person.status = "Upgraded";
        }     
    }
    
})();