'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Spot.belongsTo(models.User, { as: 'Owner', foreignKey: 'ownerId' });

      Spot.hasMany(models.Review, { foreignKey: 'spotId' });

      Spot.hasMany(models.Booking, { foreignKey: 'spotId' });

      Spot.hasMany(models.SpotImage, { foreignKey: 'spotId' });
    }
  }
  Spot.init({
    ownerId: DataTypes.INTEGER,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    lat: DataTypes.DOUBLE,
    lng: DataTypes.DOUBLE,
    name: DataTypes.STRING,
    description: DataTypes.STRING(2048),
    price: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Spot',
  });
  return Spot;
};
