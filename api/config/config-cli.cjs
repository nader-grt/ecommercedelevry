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

    npx sequelize-cli db:migrate

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

dayWorks

npx sequelize-cli migration:generate --name create-dayWorks


deliverersdayWorks

npx sequelize-cli migration:generate --name create-deliverersdayWorks

secrtries

npx sequelize-cli migration:generate --name create-secrtriesdayWorks


view 
npx sequelize-cli migration:generate --name create-deliverer-work-days-view


//  create indexes for remove duplicate and table middlke deliverer_dayWorks
npx sequelize-cli migration:generate --name add-unique-to-deliverer-dayworks

// add column orderitems 

npx sequelize-cli migration:generate --name alter_orderitems_add_columns

remove column
npx sequelize-cli migration:generate --name remove-totalPrice-from-orderitems

// add constrain unique_order_product
npx sequelize-cli migration:generate --name add-constrain_unique_order_product-from-orderitems
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