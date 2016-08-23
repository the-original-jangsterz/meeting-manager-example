/* global angular */

(function() {
  angular.module('app').controller('meetingsCtrl', function($scope, $http) {
    $http.get('/api/v1/meetings.json').then(function(response) {
      $scope.meetings = response.data;
    });

    $scope.changeOrderAttribute = function(inputAttribute) {
      $scope.orderAttribute = inputAttribute;
      $scope.isOrderDescending = !$scope.isOrderDescending;
    };

    window.$scope = $scope;
  });
})();
