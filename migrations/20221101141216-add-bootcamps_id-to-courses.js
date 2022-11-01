'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.addColumn(
      'courses', 'bootcamps_id',
      {
        type: Sequelize.INTEGER,
        references:{
          model: 'bootcamps',
          key:'id'
        }, 
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
      }
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

     await queryInterface.removeColumn('courses', 'bootcamps_id')
  }
};
