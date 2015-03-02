angular.module('TasksControllers')
.controller('addCtrl', ['$scope', 'TasksService', '$state', function ($scope, TasksService, $state) {
    $scope.cancel = function () {
        $("#addModal").modal("hide");
    };
    $scope.show = function () {
        $("#addModal").modal("show");
    };
    $scope.path = "project_list";
    $scope.item = {
        title: null,
        description: null
    };
    $scope.create = function () {
        TasksService.setProject($scope.item).then(function () {
            $state.go($scope.path, {}, {reload: true});
        });
        $("#addModal").modal("hide");
    };
        
}]);
