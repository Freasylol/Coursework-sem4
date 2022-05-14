module.exports = (sequelize, DataTypes) => {
    const Basket = sequelize.define('Basket', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }   

    });
    return Basket;
};