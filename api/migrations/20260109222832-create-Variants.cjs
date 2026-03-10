'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Variants', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Products',
          key: 'id'
        }
      },

      sku: {
        type: Sequelize.STRING,
        unique: true
      },

      color: {
        type: Sequelize.STRING
      },

      size: {
        type: Sequelize.STRING
      },

      price: {
        type: Sequelize.DECIMAL(10,2)
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
    await queryInterface.dropTable('Variants');
  }
};