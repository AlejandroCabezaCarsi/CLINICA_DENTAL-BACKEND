"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class treatment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.treatment.hasMany(models.appointment, {
        foreignKey: "treatmentId",
      });
    }
  }
  treatment.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.FLOAT,
      duration: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "treatment",
    }
  );
  return treatment;
};
