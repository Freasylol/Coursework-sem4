module.exports = (sequelize, DataTypes) => {
    const Device = sequelize.define('Device', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            primaryKey: true,
            unique: true,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false 
        }
    });
    return Device;
};