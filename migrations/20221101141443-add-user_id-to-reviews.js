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
      'reviews', 'user_id',
      {
        type: Sequelize.INTEGER,
        references:{
          model: 'users',
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
     await queryInterface.removeColumn('reviews', 'user_id')
  }
};
