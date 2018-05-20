var app = angular.module('phonecatApp.service', []);

app.factory('Phone', ['$http', function ($http) {
    var phoneData = {};
    var URL = window.location.origin;

    phoneData.getAllPhones = function () {
        return $http({
           method: 'GET',
           url: URL+'data/phones/phones.json'
        });
    }

}]);