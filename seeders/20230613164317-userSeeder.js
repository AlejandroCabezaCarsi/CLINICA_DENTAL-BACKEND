'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const bcrypt = require('bcrypt')

    return queryInterface.bulkInsert("users", [
      {
        id: 1,
        name: "superAdmin",
        lastname: "superAdmin",
        email: "superAdmin@superAdmin.com",
        password: bcrypt.hashSync("1234", 8),
        dni: "123456789A",
        phoneNumber: 111111111,
        roleId: 1,
        isActive:true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "admin",
        lastname: "admin",
        email: "admin@admin.com",
        password: bcrypt.hashSync("1234", 8),
        dni: "987654321B",
        phoneNumber: 222222222,
        roleId: 2,
        isActive:true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:3,
        name: "medic",
        lastname: "medic",
        email: "medic@medic.com",
        password: bcrypt.hashSync("1234", 8),
        dni: "67891234C",
        phoneNumber: 333333333,
        roleId: 3,
        isActive:true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:4,
        name: "patient",
        lastname: "patient",
        email: "patient@patient.com",
        password: bcrypt.hashSync("1234", 8),
        dni: "67891234D",
        phoneNumber: 444444,
        roleId: 4,
        isActive:true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },



  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
