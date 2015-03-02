angular.module('TasksControllers')
.controller('addTaskCtrl', ['$scope', 'TasksService', 'project', '$state', function ($scope, TasksService, project, $state) {
    $scope.item = {
        title: null,
        description: null,
        projectId: project.id
    };
    $scope.show = function () {
        $("#addModal").modal("show");
    };
    $scope.path = "project_list.tasks_list";
    $scope.cancel = function () {
        $("#addModal").modal("hide");
    };
    $scope.create = function () {
        TasksService.setTask($scope.item).then(function () {
             $state.go($scope.path, {}, {reload: true});
        });
         $("#addModal").modal("hide");
    };
}]);