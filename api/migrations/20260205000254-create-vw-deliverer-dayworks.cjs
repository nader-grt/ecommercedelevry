'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 
   
    await queryInterface.sequelize.query(`
      CREATE VIEW vw_deliverer_dayworks AS
      SELECT
        u.id AS user_id,
        CONCAT(u.firstName, ' ', u.lastName) AS full_name,
        e.salary,
        d.id AS deliverer_id,
        d.carType,
        dw.nameDay
      FROM Users u
      JOIN Employees e ON u.id = e.userId
      JOIN deliverers d ON d.employeeId = e.id
      JOIN deliverer_dayWorks ddw ON ddw.delivererid = d.id
      JOIN dayWorks dw ON ddw.dayWorkid = dw.id;
    `);
     
  },

  async down (queryInterface, Sequelize) {


    await queryInterface.sequelize.query(`
      DROP VIEW IF EXISTS vw_deliverer_dayworks;
    `);
     
  }
};
/**
 * 
 



CREATE OR REPLACE VIEW view_deliverer_work_days AS
SELECT    
  Users.id AS TusersId,
  CONCAT(Users.firstName, ' ', Users.lastName) AS FullName,
  Users.role AS UserIsRole,

  dayWorks.nameDay AS DayOfWorkDelivery,

  IFNULL(deliverer_dayWorks.nbrHours, 0) AS DeliveryNbrHours,

  Employees.salary AS SalaryEmpIsDelivery,
  deliverers.id AS TdeliD,
  deliverers.carType AS TdelcarType

FROM dayWorks

LEFT JOIN deliverer_dayWorks 
  ON dayWorks.ID = deliverer_dayWorks.dayWorkid

LEFT JOIN deliverers 
  ON deliverers.id = deliverer_dayWorks.delivererid

LEFT JOIN Employees    
  ON Employees.id = deliverers.employeeId

LEFT JOIN Users 
  ON Users.id = Employees.userId
  AND Users.role = 'deliverer';












 */