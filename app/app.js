var app = angular.module('phonecatApp', ['ngRoute', 'ngResource', 'phonecatService']);

app.config(['$locationProvider','$routeProvider', function ($locationProvider, $routerProvider) {

    $locationProvider.hashPrefix('!');

    $routerProvider
        .when('/', {
            templateUrl: 'view/viewIndex.html'
        })
        .when('/phone/:phoneId',{
            template: '<phone-details></phone-details>'
        });

    $locationProvider.html5Mode(true);
}]);
