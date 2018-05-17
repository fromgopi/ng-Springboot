var app = angular.module('phonecatApp', ['ngRoute']);

app.config(['$routeProvider', function ($routerProvider) {
    $routerProvider.when('/', {
       templateUrl: 'view/viewIndex.html'
    });
}]);
