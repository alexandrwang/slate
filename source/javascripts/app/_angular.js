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
  var getUser = { get: { method: 'GET' } };
  if (jwt) {
    getUser.get.headers = {'authorization': 'JWT ' + jwt};
  }
  var User = $resource('https://dashboard.scaleapi.com/internal/logged_in_user', {}, getUser);

  var getCustomerKeys = { get: { method: 'GET' } };
  if (jwt) {
    getCustomerKeys.get.headers = {'authorization': 'JWT ' + jwt};
  }
  var CustomerKeys = $resource('https://dashboard.scaleapi.com/internal/customer_keys', {}, getCustomerKeys);

  $scope.user = {};
  $scope.ApiKey = 'SCALE_API_KEY';

  User.get({}, function(user) {
    $scope.user = user;

    if ($scope.user.email) {
      CustomerKeys.get({}, function(customerKeys) {
        if (!customerKeys || customerKeys.test || customerKeys.test.apiKeys || customerKeys.test.apiKeys.length === 0) {
          return;
        }

        $scope.ApiKey = customerKeys.test.apiKeys[0];
        $scope.user.testApiKey = $scope.ApiKey
      });
    }
  });
}]);
