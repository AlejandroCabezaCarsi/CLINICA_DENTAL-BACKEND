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
      
      models.appoinment.belongsTo(models.user)
      models.appoinment.belongsTo(models.clinic)
      models.appoinment.belongsTo(models.treatment)
      
    }
  }
  appoinment.init({
    userId:{
      type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'id'
    }},
    medicId: DataTypes.STRING,
    treatmentId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'treatments',
        key: 'id'
      }
    },
    clinicId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'clinics',
        key: 'id'
      }
    },
    date: DataTypes.STRING,
    comments: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'appoinment',
  });
  return appoinment;
};