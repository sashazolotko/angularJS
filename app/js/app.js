var TasksApp = angular.module('TasksApp', ['ui.router', 'TasksControllers', 'TasksServices']);
TasksApp
.config( 
function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/projects');
    $stateProvider.state('project_list', {
        url: '/projects',
        views: {
            'projects': {
                templateUrl: '../views/projects.html' ,
                controller: 'projectsCtrl'
            }
        }
    }).state('project_list.tasks_list', {
        url: '/{projectId:int}',
        views: {
            'tasks@': {
                templateUrl: '../views/tasks.html',
                resolve: {
                    tasks: function (TasksService, $stateParams) {
                        return TasksService.getTasks($stateParams.projectId);
                    },
                    project: function (TasksService, $stateParams) {
                        return TasksService.getProject($stateParams.projectId);
                    }
                },
                controller: 'tasksCtrl'
            }
        }
    }).state('project_list.tasks_list.description', {
        url: '/{taskId:int}',
        views: {
            'description@': {
                templateUrl: '../views/description.html',
                resolve: {
                    task: function (TasksService, $stateParams) {
                        return TasksService.getTask($stateParams.taskId);
                    }
                },
                controller: 'descriptionCtrl'
            }
        }
    }).state('project_list.add', {
        url: '/add',
        views: {
            'add@': {
                templateUrl: '../views/add.html',
                controller: 'addCtrl'
            }
        }
    }).state('project_list.tasks_list.add', {
        url: '/add',
        views: {
            'add@': {
                templateUrl: '../views/add.html',
                resolve: {
                    project: function (TasksService, $stateParams) {
                        return TasksService.getProject($stateParams.projectId);
                    }
                },
                controller: 'addTaskCtrl'
            }
        }
    }).state('project_list.tasks_list.edit', {
        url: '/edit',
        views: {
            'edit@': {
                templateUrl: '../views/edit.html',
                resolve: {
                    project: function (TasksService, $stateParams) {
                        return TasksService.getProject($stateParams.projectId);
                    }
                },
                controller: 'editCtrl'
            }
        }
    }).state('project_list.tasks_list.description.edit', {
        url: '/edit',
        views: {
            'edit@': {
                templateUrl: '../views/edit.html',
                resolve: {
                    task: function (TasksService, $stateParams) {
                        return TasksService.getTask($stateParams.taskId);
                    }
                },
                controller: 'editTaskCtrl'
            }
        }
    });
});
