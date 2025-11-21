import { Sequelize  } from "sequelize";

 import dotenv from "dotenv";

dotenv.config();
/*
const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASSWORD!,
  {
    host: process.env.DB_HOST!,
    port: Number(process.env.DB_PORT!) ,
    dialect: "mysql",
  //  logging: false,//   logging: false,
  }
);*/

const sequelize = new Sequelize( process.env.DB_NAME!,  process.env.DB_USER!,  process.env.DB_PASS, {
  host:  process.env.DB_HOST,
  port: Number( process.env.DB_PORT),
  dialect: "mysql",
  logging: false, // <-- disable all SQL logs
});


 export default sequelize;





/*

 import dotenv from 'dotenv';
 dotenv.config();
 
 export default {
   development: {
     username: process.env.DB_USER,
     password: process.env.DB_PASSWORD || null,
     database: process.env.DB_NAME,
     host: process.env.DB_HOST,
     port: process.env.DB_PORT || 3306,
     dialect: 'mysql',
   },
   test: {
     username: process.env.DB_USER,
     password: process.env.DB_PASSWORD || null,
     database: process.env.DB_NAME + '_test',
     host: process.env.DB_HOST,
     port: process.env.DB_PORT || 3306,
     dialect: 'mysql',
   },
   production: {
     username: process.env.DB_USER,
     password: process.env.DB_PASSWORD || null,
     database: process.env.DB_NAME + '_prod',
     host: process.env.DB_HOST,
     port: process.env.DB_PORT || 3306,
     dialect: 'mysql',
   },
 };
 
*/








 

/*

 
 */