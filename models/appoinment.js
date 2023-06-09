'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class appoinment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  appoinment.init({
    userId: DataTypes.INTEGER,
    medicId: DataTypes.STRING,
    treatmentId: DataTypes.INTEGER,
    clinicId: DataTypes.INTEGER,
    date: DataTypes.STRING,
    comments: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'appoinment',
  });
  return appoinment;
};