angular.module('app')
  .controller('MainCtrl', function($scope, projects) {
    $scope.projects = projects;
  });
