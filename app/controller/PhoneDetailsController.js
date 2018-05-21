var app = angular.module('phonecatApp');

app.controller('PhoneDetailsController', ['$scope','$routeParams','phoneFactory', function($scope, $routeParams, phoneFactory) {
    var self = this;
    console.log("Inside phoneDetails component.");
    self.phoneDet = {};
    self.phoneId = $routeParams.phoneId;

    phoneFactory.getPhoneDetails(self.phoneId).success(function (response) {
        self.phoneDet = response;
    });
    self.setImage = function setImage(imageUrl) {
        self.mainImageUrl = imageUrl;
    };
}]);