var app = angular.module('scale', ['ngResource']);

function getJWTCookie() {
  var name = 'jwt';
  var value = '; ' + document.cookie;
  var parts = value.split('; ' + name + '=');
  if (parts.length === 2) return parts.pop().split(';').shift();
}

app.controller('docsController', ["$scope", "$http", "$resource", function ($scope, $http, $resource) {
  $http.defaults.withCredentials = true;
  var jwt = getJWTCookie();
  var method = { get: { method: 'GET' } };
  if (jwt) {
    method.get.headers = {'authorization': 'JWT ' + jwt};
  }
  var CustomerKeys = $resource('https://dashboard.scaleapi.com/internal/customer_keys', {}, method);

  $scope.user = {};
  $scope.ApiKey = 'SCALE_API_KEY';
  $scope.isLoggedIn = false;

  CustomerKeys.get({}, function(customerKeys) {
    if (
      !customerKeys ||
      !customerKeys.test ||
      !customerKeys.test.apiKeys ||
      !customerKeys.test.apiKeys.length
    ) {
      return;
    }

    $scope.ApiKey = customerKeys.test.apiKeys[0].key;
    $scope.isLoggedIn = true;
  });
}]);
