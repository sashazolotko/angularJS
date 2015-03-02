angular.module("TasksServices", [])
.service('TasksService', ['$http', function ($http) {
    var projects;
    function getProjects() {
        return $http.get('/api/Projects').then(function (result) {
            projects = result.data;
            return projects;
        }, function err(error) {
            throw error;
        });
    }
    function getTasks(projectId) {
        return $http.get('api/Projects/' + projectId + '/Tasks').then(function (result) {
            return result.data.data;
        }, function (error) {
            throw error;
        });
    }
    function getProject(projectId) {
        return $http.get('api/Projects/' + projectId).then(function (result) {
            return result.data.data;
        }, function (error) {
            throw error;
        });
    }
    function getTask(taskId) {
        return $http.get('api/Tasks/' + taskId).then(function (result) {
            return result.data.data;
        }, function (error) {
            throw error;
        });
    }
     function setProject(project) {
        return $http.post('api/Projects', {
            title: project.title,
            description: project.dscription
        }).then(function (result) {
            return result.data.data;
        }, function (error) {
            throw error;
        });
    }
    function setTask(task) {
        return $http.post('api/Tasks', {
            title: task.title,
            description: task.description,
            project_id: task.projectId
        })
          .then(function (result) {
            return result.data.data;
        }, function (error) {
            throw error;
        });
    }
    function changeProject(project) {
        return $http.put('api/Projects/' + project.id, {
            title: project.title,
            description: project.description
        }).then(function (result) {
            return result.data.data;
        }, function (error) {
            throw error;
        });
    }
    function changeTask(task) {
        return $http.put('api/Tasks/' + task.id, {
            title: task.title,
            description: task.description
        }).then(function (result) {
            return result.data.data;
        }, function (error) {
            throw error;
        });
    }
    function removeProject(project) {
        return $http.delete('api/Projects/' + project)
            .then(function (result) {
            return result.data.data;
        }, function (error) {
            throw error;
        });
    }
    function removeTask(task) {
        console.log(task);
        return $http.delete('api/Tasks/' + task).then(function (data) {
            
        }, function (error) {
            console.log(error);
            throw error;
        });
    }

    return {
        getProjects: getProjects,
        getProject: getProject,
        getTasks: getTasks,
        getTask: getTask,
        setProject: setProject,
        removeTask: removeTask,
        setTask: setTask,
        changeProject: changeProject,
        changeTask: changeTask,
        removeProject: removeProject
    };
}]);
