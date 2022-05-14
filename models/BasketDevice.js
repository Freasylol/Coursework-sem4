module.exports = (sequelize, DataTypes) => {
    const BasketDevice = sequelize.define('BasketDevice', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }   

    });
    return BasketDevice;
};