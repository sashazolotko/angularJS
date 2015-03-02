angular.module('TasksControllers')
.directive('projectsList', function () {
    return {
        restrict: "EA",
        replace: true,
        scope: true
    };
});
