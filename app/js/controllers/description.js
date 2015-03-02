angular.module('TasksControllers')
.controller('descriptionCtrl', 
['$scope', 'TasksService', 'task', function ($scope, TasksService, task) {
    $scope.task = task;
}]);