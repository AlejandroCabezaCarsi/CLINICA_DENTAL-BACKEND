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

    return queryInterface.bulkInsert("roles", [
      {
        id: 1,
        role: "superAdmin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        role: "medic",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        role: "patient",
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
