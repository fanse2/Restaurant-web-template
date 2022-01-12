var app = angular.module("myApp", []);

app.controller("myCtrl", function ($scope, $http) {
  $http.get("info.json").then(function (response) {
    $scope.data = response.data;
    console.log($scope.data);
  });
});
