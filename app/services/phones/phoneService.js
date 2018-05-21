var app = angular.module('phonecatService', []);

app.factory('phoneFactory', ['$http', function ($http) {
    var phoneData = {};
    var URL = window.location.origin;

    phoneData.getAllPhones = function () {
        return $http({
           method: 'GET',
           url: URL+'/data/phones/phones.json'
        });
    }

    return phoneData;

}]);