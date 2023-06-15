'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.appointment.belongsTo(models.user, {
        foreignKey: "userId"
      })
      models.appointment.belongsTo(models.medic, {
        foreignKey: "medicId"
      })
      models.appointment.belongsTo(models.treatment, {
        foreignKey: "treatmentId"
      })
      models.appointment.belongsTo(models.clinic, {
        foreignKey: "clinicId"
      })
    }
  }
  appointment.init({
    userId: DataTypes.INTEGER,
    medicId: DataTypes.INTEGER,
    treatmentId: DataTypes.INTEGER,
    clinicId: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    date: DataTypes.STRING,
    comments: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'appointment',
  });
  return appointment;
};