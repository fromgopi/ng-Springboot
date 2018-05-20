var app = angular.module('phonecatApp');

app.controller('PhoneDetailsController', ['$scope','$http', '$routeParams', function($scope, $http, $routeParams) {
    var self = this;
    console.log("Inside phoneDetails component.");
    self.phoneDet = [];
    self.phoneId = $routeParams.phoneId;
    $http.get('data/phones/'+self.phoneId+'.json').then(function (response) {
        self.phoneDet = response.data;
    });

    self.setImage = function setImage(imageUrl) {
        self.mainImageUrl = imageUrl;
    };
}]);