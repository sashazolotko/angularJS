module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Task', {
        id: {
            type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true
        },
        projectId: { type: DataTypes.INTEGER, field: 'project_id' },
        title: DataTypes.STRING,
        description: DataTypes.TEXT
    });
};