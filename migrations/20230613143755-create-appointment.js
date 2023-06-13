'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        required: true
        
      },
      medicId: {
        type: Sequelize.INTEGER,
        required: true
      },
      treatmentId: {
        type: Sequelize.INTEGER,
        required: true
      },
      clinicId: {
        type: Sequelize.INTEGER,
        required: true
      },
      price: {
        type: Sequelize.INTEGER,
        required: true
      },
      date: {
        type: Sequelize.STRING,
        required: true
      },
      comments: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('appointments');
  }
};