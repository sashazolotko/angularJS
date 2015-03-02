var express = require('express'),
    _ = require('lodash'),
    Sequelize = require('sequelize'),
    restful = require('sequelize-restful'),
    sequelize = new Sequelize('mysql://root@localhost/tasks', {
        define: {
            timestamps: false
        }
    }),
    port = 3000,
    app = express();

app.use(express.static('app'));


var Router = require('sequelize-restful/lib/router');
var oldHandleRequest = Router.prototype.handleRequest;
Router.prototype.handleRequest = function(req, callback) {
    var handleResourceDescribe = function(modelName, callback) {
        var daoFactory = this.findDAOFactory(modelName);
        var attrs = _.reduce(daoFactory.rawAttributes, function (ret, attr, name) {
            ret[name] = _.omit(attr, ['type', 'Model', '_modelAttribute']);
            return ret;
        }, {});

        if (!!daoFactory) {
            this.handleSuccess({
                name:       daoFactory.name,
                tableName:  daoFactory.tableName,
                attributes: attrs
            }, {
                viaHeaders: true
            }, callback);
        } else {
            this.handleError("Unknown DAOFactory: " + modelName, callback);
        }
    };

    var match = this.splitPath(req.path);
    if (match.length == 1 && req.method == 'HEAD') {
        return handleResourceDescribe.call(this, match[0], callback);
    }
    oldHandleRequest.call(this, req, callback);
};

// define all your models before the configure block
sequelize.import(__dirname + '/models/project');
sequelize.import(__dirname + '/models/task');
sequelize.models.Project.hasMany(sequelize.models.Task, {
    foreignKey: 'project_id'
});
sequelize.sync();

app.use(restful(sequelize));

app.listen(3000, function () {
    console.log('Example app listening at http://localhost:%s', port);
});