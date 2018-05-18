var app = angular.module('phonecatApp', ['ngRoute']);

app.config(['$locationProvider','$routeProvider', function ($locationProvider, $routerProvider) {

    $locationProvider.hashPrefix('!');

    $routerProvider
        .when('/', {
            templateUrl: 'view/viewIndex.html'
        })
        .when('/phone',{
            template: '<h1>This is simple /phone...</h1>'
        });

    $locationProvider.html5Mode(true);
}]);
