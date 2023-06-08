'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('clinics', [
      {
        id:1,
        address: "Calle Falsa 22, 6, 46022",
        number: 963333333,
        email: "clinicavalencia@clinicavalencia.com",
        city: "Valencia",
        createdAt: new Date(), 
        updatedAt: new Date()
      },
      {
        id:2,
        address: "Calle Inventada 78, 25, 28013",
        number: 911111111,
        email: "clinicamadrid@clinicamadrid.com",
        city: "Madrid",
        createdAt: new Date(), 
        updatedAt: new Date()
      }
    ])
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
