var app = angular.module('phonecatApp.service', []);

app.factory('Phone', ['$resource', function ($resource) {
    return $resource('phone/:phoneId.json', {}, {
        query: {
            method: 'GET',
            params: {phoneId: 'phones'},
            isArray: true
        }
    })
}]);