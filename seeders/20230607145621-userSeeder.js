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

    return queryInterface.bulkInsert('roles', [
      {
        id: 1, 
        name: "user", 
        email: "user@user.com",
        password: /*TRAER BCRYPT*/,
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      {
        id: 2, 
        name: "admin", 
        email: "admin@admin.com",
        password: /*TRAER BCRYPT*/,
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3, 
        name: "superAdmin", 
        email: "superAdmin@superAdmin.com",
        password: /*TRAER BCRYPT*/,
        roleId: 1,
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
