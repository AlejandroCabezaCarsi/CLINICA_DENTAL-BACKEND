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
        required: true,
        references: {
          model: 'users',
          key: 'id'
        }
        
      },
      medicId: {
        type: Sequelize.INTEGER,
        required: true,
        references: {
          model: 'medics',
          key: 'id'
        }
      },
      treatmentId: {
        type: Sequelize.INTEGER,
        required: true,
        references: {
          model: 'treatments',
          key: 'id'
        }
      },
      clinicId: {
        type: Sequelize.INTEGER,
        required: true,
        references: {
          model: 'clinics',
          key: 'id'
        }
      },
      price: {
        type: Sequelize.INTEGER,
        required: true,
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