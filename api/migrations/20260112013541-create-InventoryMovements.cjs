'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('InventoryMovements', {

      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      variantId: {
        type: Sequelize.INTEGER
      },

      warehouseId: {
        type: Sequelize.INTEGER
      },

      type: {
        type: Sequelize.STRING
      },

      quantity: {
        type: Sequelize.INTEGER
      },

      referenceId: {
        type: Sequelize.INTEGER
      },

      createdAt: {
        type: Sequelize.DATE
      }

    });

  },

  async down(queryInterface) {
    await queryInterface.dropTable('InventoryMovements');
  }
};