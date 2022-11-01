'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'John Doe',
        email: 'john@gmail.com',
        pasword: '13245678'
      },
      {
        name: 'Miguel',
        email: 'miguel@gmail.com',
        pasword: 'miguelito123'
      }
  ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {}); 
  }
};
