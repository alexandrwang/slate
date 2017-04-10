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
  var User = $resource('https://dashboard.scaleapi.com/internal/logged_in_user', {}, method);

  $scope.user = {};
  $scope.ApiKey = 'SCALE_API_KEY';

  User.get({}, function(user) {
    $scope.user = user;
    if (user.testApiKey) {
      $scope.ApiKey = user.testApiKey;
    }
  });
}]);
