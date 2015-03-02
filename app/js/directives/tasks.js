angular.module('TasksControllers')
.directive('tasksList', function () {
    return {
        restrict: "EA",
        replace: true,
        scope: true,
    };
});
