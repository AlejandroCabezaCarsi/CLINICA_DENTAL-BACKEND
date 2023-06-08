'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class clinic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  clinic.init({
    address: DataTypes.STRING,
    number: DataTypes.INTEGER,
    email: DataTypes.STRING,
    city: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'clinic',
  });
  return clinic;
};