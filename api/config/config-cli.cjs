// config/config-cli.cjs
module.exports = {
    development: {
      username: "root",
      password: "",
      database: "ecommercedelevry",
      host: "127.0.0.1",
      port: 3307,
      dialect: "mysql"   
    }
  };
  

  /**
   * 
   
   Undo ONLY the last migration

   npx sequelize-cli db:migrate:undo

   All 
  
  npx sequelize-cli db:migrate:undo:all


npx sequelize-cli migration:generate --name create-Products

npx sequelize-cli migration:generate --name create-Categories
//categories  npx sequelize-cli db:migrate:undo:all


npx sequelize-cli migration:generate --name create-Employees

//
deliverer

npx sequelize-cli migration:generate --name create-deliverers

//SECRITRY
npx sequelize-cli migration:generate --name create-secrtries
//supllier
npx sequelize-cli migration:generate --name create-suplliers


//order

npx sequelize-cli migration:generate --name create-orders


//settings

npx sequelize-cli migration:generate --name create-setting


OrderItems

npx sequelize-cli migration:generate --name create-OrderItems


dayWorks

npx sequelize-cli migration:generate --name create-dayWorks

run  xampp  

sudo /opt/lampp/lampp start



Starting XAMPP for Linux...
XAMPP: Starting Apache...
XAMPP: Starting MySQL...
XAMPP: Starting ProFTPD...




open  maria db 


sudo /opt/lampp/bin/mysql -u root -p


or  



 createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },

   */