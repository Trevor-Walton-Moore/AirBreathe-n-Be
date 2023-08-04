'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.hasMany(models.ReviewImage, { foreignKey: 'reviewId' });

      Review.belongsTo(models.User, { foreignKey: 'userId' });

      Review.belongsTo(models.Spot, { foreignKey: 'spotId' });
    }
  }
  Review.init({
    spotId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    review: DataTypes.STRING(2048),
    stars: DataTypes.FLOAT(2, 1)
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};
