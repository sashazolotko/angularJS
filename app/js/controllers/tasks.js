angular.module('TasksControllers')
.controller('tasksCtrl', 
['$scope', 'TasksService', 'project', 'tasks', '$state',function ($scope, TasksService, project, tasks, $state) {
    $scope.tasks = tasks;
    $scope.project = project;
    $scope.selectIndex = null;
    $scope.select = function (index) {
        $scope.selectIndex = $scope.tasks[index].id;
    };
    $scope.isSelect = function (index) {
        if ($scope.tasks[index].id == $scope.selectIndex) {
            return true;
        } else {
            return false;
        }
    };

    $scope.setClass = function (index) {
        if ($scope.tasks[index].id == $scope.selectIndex) {
            return "select";
        } else {
            return "deselect";
        }
    };
    $scope.remove = function () {
        TasksService.removeTask($scope.selectIndex).then(function () {
            $state.go('project_list.tasks_list', {}, {reload: true});
        });
    };

}]);