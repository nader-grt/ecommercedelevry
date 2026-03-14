'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    // حذف الـ foreign key الحالي
    await queryInterface.removeConstraint(
      'Variants',
      'Variants_ibfk_1'
    );

    // إنشاء foreign key جديد مع CASCADE
    await queryInterface.addConstraint('Variants', {
      fields: ['productId'],
      type: 'foreign key',
      name: 'fk_variants_product',
      references: {
        table: 'Products',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.removeConstraint(
      'Variants',
      'fk_variants_product'
    );

    await queryInterface.addConstraint('Variants', {
      fields: ['productId'],
      type: 'foreign key',
      name: 'Variants_ibfk_1',
      references: {
        table: 'Products',
        field: 'id'
      }
    });

  }
};