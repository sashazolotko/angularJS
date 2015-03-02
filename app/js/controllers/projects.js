angular.module('TasksControllers')
.controller('projectsCtrl',
['$scope', 'TasksService', '$stateParams', '$state', function ($scope, TasksService, $stateParams, $state) {
    TasksService.getProjects().then(function (data) {
        $scope.projects = data.data;
    });
    $scope.selectIndex = null;
    $scope.select = function (index) {
        $scope.selectIndex = $scope.projects[index].id;
    };
    $scope.setClass = function (index) {
        if ($scope.projects[index].id == $scope.selectIndex) {
            return "select";
        } else {
            return "deselect";
        }
    };
    $scope.isSelect = function (index) {
        if ($scope.projects[index].id == $scope.selectIndex) {
            return true;
        } else {
            return false;
        }
    };
    $scope.remove = function () {
        TasksService.removeProject($scope.selectIndex).then(function () {
            $state.go('project_list', {}, {reload: true});
        });
    };

}]);