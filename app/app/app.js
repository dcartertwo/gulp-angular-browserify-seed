require('angular/angular');
require('angular-route/angular-route');
require('./bootstrap');
var mainctrl = require('./mainctrl');

//Declare app level module and dependencies
angular.module('sampleApp', [
    'ngRoute'
    ])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/app/templates/home.html', 
                controller: 'MainCtrl'
            })
            .otherwise( 
                {
                    redirectTo: '/'
                });
    }]);

//Load controller(s)
angular.module('sampleApp').controller('MainCtrl', ['$scope', mainctrl.MainController]);    
   
