angular.module('TasksControllers')
.directive('description', function () {
    return {
        restrict: "EA",
        replace: true,
        scope: true
    };
});
