"use strict";

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
        phonenumber: 111111111,
        dni: "123456789A",
        roleId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "admin",
        lastname: "admin",
        email: "admin@admin.com",
        password :bcrypt.hashSync("1234", 8),
        phonenumber: 222222222,
        dni: "987654321B",
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "medic",
        lastname: "medic",
        email: "medic@medic.com",
        password: bcrypt.hashSync("1234", 8),
        phonenumber: 333333333,
        dni: "67891234C",
        roleId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "patient",
        lastname: "patient",
        email: "patient@patient.com",
        password: bcrypt.hashSync("1234", 8),
        phonenumber: 333333333,
        dni: "67891234C",
        roleId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
