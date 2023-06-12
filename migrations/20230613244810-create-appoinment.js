'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('appoinments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      medicId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'medics',
          key: 'id'       
        }
      },
      treatmentId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'treatments',
          key: 'id'
        }
      },
      clinicId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'clinics',
          key: 'id'
        }
      },
      price: {
        type : Sequelize.INTEGER,
        references: {
          model: 'treatments',
          key: 'id'
      }
    },
      date: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('appoinments');
  }
};