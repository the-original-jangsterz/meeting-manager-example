/* global angular */

(function() {
  angular.module('app').controller('meetingsCtrl', function($scope) {
    $scope.message = "Hello world";

    window.$scope = $scope;
  });
})();
