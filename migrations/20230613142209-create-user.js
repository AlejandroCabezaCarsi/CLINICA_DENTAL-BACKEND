'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        required: true
      },
      lastname: {
        type: Sequelize.STRING,
        required: true
      },
      email: {
        type: Sequelize.STRING,
        required: true,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        required: true
      },
      dni: {
        type: Sequelize.STRING,
        required: true,
        unique: true
      },
      phoneNumber: {
        type: Sequelize.INTEGER,
        required: true,
        unique: true
      },
      roleId: {
        type: Sequelize.INTEGER,
        required: true,
        references: {
          model: 'roles',
          key: 'id'
        }

      },
      isActive: {
        type: Sequelize.BOOLEAN,
        required: true
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
    await queryInterface.dropTable('users');
  }
};