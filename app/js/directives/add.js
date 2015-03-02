angular.module('TasksControllers')
.directive('add', function () {
    return {
        restrict: "EA",
        replace: true,
        scope: true
    };
});
