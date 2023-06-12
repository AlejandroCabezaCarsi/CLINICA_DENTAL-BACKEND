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
      models.medic.belongsTo(models.role)
      models.medic.hasMany(models.appoinment, {
        foreignKey: 'medicId',
      })
    }
  }
  medic.init({
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    roleId: DataTypes.INTEGER,
    speciality: DataTypes.STRING,
    collegiateNumber: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phoneNumber: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'medic',
  });
  return medic;
};