var app = angular.module('phonecatApp');

app.controller('PhoneDetailsController', ['$scope','$http', '$routeParams', function($scope, $http, $routeParams) {
    var self = this;
    this.phoneId = $routeParams.phoneId;
}]);