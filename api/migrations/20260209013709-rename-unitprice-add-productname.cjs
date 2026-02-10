'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
    await queryInterface.renameColumn('OrderItems', 'unitPrice', 'price');

   
    await queryInterface.addColumn('OrderItems', 'productName', {
      type: Sequelize.STRING,
      allowNull: false,
    });
     
  },

  async down (queryInterface, Sequelize) {
 
    await queryInterface.renameColumn('OrderItems', 'price', 'unitPrice');

   
    await queryInterface.removeColumn('OrderItems', 'productName');
     
  }
};
