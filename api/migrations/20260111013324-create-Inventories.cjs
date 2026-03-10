'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('Inventories', {

      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      variantId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Variants',
          key: 'id'
        }
      },

      warehouseId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Warehouses',
          key: 'id'
        }
      },

      quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },

      reserved: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },

      createdAt: {
        type: Sequelize.DATE
      },

      updatedAt: {
        type: Sequelize.DATE
      }

    });

  },

  async down(queryInterface) {
    await queryInterface.dropTable('Inventories');
  }
};







