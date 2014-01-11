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

//Wait until DOM is ready    
angular.element(document).ready(function() {
    angular.bootstrap(document, ['sampleApp']); 
});
   
