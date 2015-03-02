angular.module('TasksControllers')
.directive('edit', function () {
    return {
        restrict: "EA",
        replace: true,
        scope: true
    };
});
