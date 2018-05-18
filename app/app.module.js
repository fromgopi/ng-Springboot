var app = angular.module('phonecatApp');

app.config(['$locationProvider' ,'$routeProvider', function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.
    when('/phones', {
        template: '<h1>You are in app.config and /phones were called.</h1>'
    });
}]);