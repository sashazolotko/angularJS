angular.module('TasksControllers')
.controller('editTaskCtrl',['$scope', 'TasksService', '$state', 'task', function ($scope, TasksService, $state, task) {
    $scope.show = function () {
        $("#editModal").modal("show");
    };
    $scope.cancel = function () {
        $("#editModal").modal("hide");
    };
    $scope.path = "project_list.tasks_list.description";
    console.log(task);
    $scope.oldData = task;
    $scope.item = {
        title: $scope.oldData.title,
        description: $scope.oldData.description,
        id: $scope.oldData.id
    };
    $scope.edit = function () {
        TasksService.changeTask($scope.item).then(function () {
            $state.go($scope.path, {}, {reload: true});
        });
        $("#editModal").modal("hide");
    };
}]);
