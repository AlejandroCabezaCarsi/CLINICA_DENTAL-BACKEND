'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class medic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  medic.init({
    userId: DataTypes.INTEGER,
    speciality: DataTypes.STRING,
    collegiateNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'medic',
  });
  return medic;
};