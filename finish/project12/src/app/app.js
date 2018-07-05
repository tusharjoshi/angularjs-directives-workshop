(function(){

    'use strict';
    
    var $ = require('jquery');
    require('angular');
    
    angular.module('myApp').controller('MyController', MyController);

    MyController.$inject = ['$scope'];

    function MyController($scope) {
    }

    angular.module('myApp').directive('projectManager', ProjectManagerDirective);

    function ProjectManagerDirective() {
        var name = 'Project Manager';
        return {
            scope: true,
            controller: function ($scope) {
                this.name = name;
            },
            link: function($scope, el, attrs) {
                $(el).data('name', name);
            }
        }
    }

    angular.module('myApp').directive('teamLead', TeamLeadDirective);

    function TeamLeadDirective() {
        var name = 'Team Lead';
        return {
            scope: true,
            require: '^projectManager',
            controller: function($scope) {
                this.name = name;
            },
            link: function($scope, el, attrs, projectManagerCtrl) {
                $(el).data('name', name);
                $(el).data('manager', projectManagerCtrl.name);
                console.log('Team Leads manager is ' + projectManagerCtrl.name);
            }
        }
    }

    angular.module('myApp').directive('softwareDeveloper', SoftwareDeveloperDirective);

    function SoftwareDeveloperDirective() {
        return {
            scope: true,
            require: '^teamLead',
            link: function($scope, el, attrs, teamLeadCtrl) {
                $(el).data('name', 'Software Developer');
                $(el).data('manager', teamLeadCtrl.name);
                console.log('Software Developers manager is ' + teamLeadCtrl.name);
            }
        }
    }
})();