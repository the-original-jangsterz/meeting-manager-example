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

    $scope.createMeeting = function(name, address, startTime, endTime, notes) {
      var params = {
        name: name,
        address: address,
        start_time: startTime,
        end_time: endTime,
        notes: notes
      };
      $http.post('/api/v1/meetings.json', params).then(function(response) {
        $scope.meetings.push(response.data);
      });
    };

    window.$scope = $scope;
  });
})();
