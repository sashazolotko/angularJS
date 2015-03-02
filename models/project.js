module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Project', {
        id: {
            type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true
        },
        title: DataTypes.STRING,
        description: DataTypes.TEXT
    });
};