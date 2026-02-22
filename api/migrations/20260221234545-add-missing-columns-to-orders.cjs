'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

  
    await queryInterface.renameColumn(
      'Orders',
      'userId',
      'customerId'
    );

   
    await queryInterface.addColumn('Orders', 'totalAmount', {
      type: Sequelize.DOUBLE,
      allowNull: false,
      defaultValue: 0,
    });

    await queryInterface.addColumn('Orders', 'status', {
      type: Sequelize.ENUM(
        'pending',
        'paid',
        'shipped',
        'delivered',
        'cancelled'
      ),
      allowNull: false,
      defaultValue: 'pending',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Orders', 'status');
    await queryInterface.removeColumn('Orders', 'totalAmount');

    await queryInterface.renameColumn(
      'Orders',
      'customerId',
      'userId'
    );
  },
};