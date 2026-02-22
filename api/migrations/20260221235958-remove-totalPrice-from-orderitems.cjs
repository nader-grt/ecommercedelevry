'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('OrderItems', 'totalPrice');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn('OrderItems', 'totalPrice', {
      type: Sequelize.DOUBLE,
      allowNull: false,
    });
  },
};