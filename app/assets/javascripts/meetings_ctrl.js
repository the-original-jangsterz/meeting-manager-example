/* global angular */

(function() {
  angular.module('app').controller('meetingsCtrl', function($scope) {
    $scope.message = "Goodbye world";

    window.$scope = $scope;
  });
})();
