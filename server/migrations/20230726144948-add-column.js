'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('BorrowedBooks', 'userId', {
      type: DataTypes.INTEGER,
    });
    await queryInterface.addColumn('BorrowedBooks', 'bookId', {
      type: DataTypes.INTEGER,
    }); 
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('BorrowedBooks', 'userId',{});
    await queryInterface.removeColumn('BorrowedBooks', 'bookId',{});
  }
};
