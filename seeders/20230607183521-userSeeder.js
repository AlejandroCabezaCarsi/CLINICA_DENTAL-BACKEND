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

    return queryInterface.bulkInsert('users', [
      {
      id:1,
      name:"Alex",
      lastname:"Cabeza",
      email:"alex@alex.com",
      phonenumber:111111111,
      dni:"123456789A",
      roleId:1,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      id:2,
      name:"Andrea",
      lastname:"Sanchez",
      email:"andrea@andrea.com",
      phonenumber:222222222,
      dni:"987654321B",
      roleId:2,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      name:"Pepe",
      lastname:"Garcia",
      email:"pepe@pepe.com",
      phonenumber:333333333,
      dni:"67891234C",
      roleId:3,
      createdAt: new Date(),
      updatedAt: new Date()
      }])
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
