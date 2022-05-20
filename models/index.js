'use strict';

const fs = require('fs');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.Users.hasOne(db.Basket);
db.Basket.belongsTo(db.Users);

db.Users.hasMany(db.Rating);
db.Rating.belongsTo(db.Users);

db.Basket.hasMany(db.BasketDevice);
db.BasketDevice.belongsTo(db.Basket);

db.Type.hasMany(db.Device);
db.Device.belongsTo(db.Type);

db.Brand.hasMany(db.Device);
db.Device.belongsTo(db.Brand);

db.Device.hasMany(db.Rating);
db.Rating.belongsTo(db.Device);

db.Device.hasMany(db.BasketDevice);
db.BasketDevice.belongsTo(db.Device);

db.Device.hasMany(db.DeviceInfo, {as: 'info'});
db.DeviceInfo.belongsTo(db.Device);

db.Type.belongsToMany(db.Brand, {through: db.TypeBrand});
db.Brand.belongsToMany(db.Type, { through: db.TypeBrand });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
