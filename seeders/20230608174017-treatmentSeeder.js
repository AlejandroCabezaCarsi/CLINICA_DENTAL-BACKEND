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

    return queryInterface.bulkInsert('treatments', [
      {
        id: 1,
        name:"Limpieza Bucodental",
        price:54,
        duration:"35 minutos",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:2,
        name:"Ortodoncia infantil",
        price: 1800,
        duration:"12 meses",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:3,
        name:"Implante(ud)",
        price: 893,
        duration:"2 horas",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:4,
        name:"Blanqueamiento",
        price: 427.50,
        duration:"1 hora",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:5,
        name:"Empaste",
        price: 65.50,
        duration:"30 minutos",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id:6,
        name:"Extracción",
        price: 54,
        duration:"1 hora",
        createdAt: new Date(),
        updatedAt: new Date()
      },
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
