module.exports = (sequelize, DataTypes) => {
    const Type = sequelize.define('Type', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            unique: true,
            allowNull: false
        }
    });
    return Type;
};