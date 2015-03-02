angular.module('TasksControllers')
.controller('editCtrl',['$scope', 'TasksService', '$state', 'project', function ($scope, TasksService, $state, project) {
    $scope.show = function () {
        $("#editModal").modal("show");
    };
    $scope.cancel = function () {
        $("#editModal").modal("hide");
    };
    $scope.path = "project_list.tasks_list";
    $scope.oldData = project;
    $scope.item = {
        title: $scope.oldData.title,
        description: $scope.oldData.description,
        id: $scope.oldData.id
    };
    $scope.edit = function () {
        TasksService.changeProject($scope.item).then(function () {
            $state.go($scope.path, {}, {reload: true});
        });
        $("#editModal").modal("hide");
    };
}]);
