'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
      await queryInterface.createTable('dayWorks', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        dayworking:{
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
        },

        employeeId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'Employees',
            key: 'id',
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        },
        
        
        });
     
  },

  async down (queryInterface, Sequelize) {
  
     await queryInterface.dropTable('dayWorks');
     
  }
};
