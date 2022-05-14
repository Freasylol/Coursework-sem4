module.exports = (sequelize, DataTypes) => {
    const DeviceInfo = sequelize.define('DeviceInfo', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return DeviceInfo;
};