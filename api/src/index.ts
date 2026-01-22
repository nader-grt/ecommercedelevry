import express from "express";
import { sequelize } from "./models/main.js"; // make sure your path is correct

import createUserRoutes from "./routes/userRoutes/createUserRoute.js";

import getUserRoutes from "./routes/userRoutes/getUserRoute.js"
import mailRoutes from "./routes/userRoutes/sendUserMailRoute.js";
import createProductRoute from "./routes/productRoutes/createProductRoute.js";
import updateProductRoute from "./routes/productRoutes/updateProductRoute.js";

import createCategoryRoute from "./routes//categoryRoute/createCategoryRoute.js";
import deleteCategoryRoute from "./routes//categoryRoute/DeleteCategoryRoute.js";
import updateCategoryRoute from "./routes//categoryRoute/UpdateCategoryRoute.js";
import getCategoryRoute from "./routes//categoryRoute/GetCategoryRoute.js";


import registerRoute from "./routes/authRoute/registerUserRoute.js";
import loginRoute from "./routes/authRoute/loginUserRoute.js";
import logoutRoute from "./routes/authRoute/logoutUserRoute.js";


import createEmployeeRoute from  "./routes/EmployeeRoute/CreateEmployeeRoute.js"
import getEmployeeRoute from  "./routes/EmployeeRoute/GetEmployeeRoute.js"
import updateEmployeeRoute from  "./routes/EmployeeRoute/UpdateEmployeeRoute.js"
import deleteEmployeeRoute from  "./routes/EmployeeRoute/DeleteEmployeeRoute.js"

import createdeleryRoute from  "./routes/DelevryRoute/CreateDelevryRoute.js"
import updatedeleryRoute from  "./routes/DelevryRoute/UpdateDelevryRoute.js"
import deletedeleryRoute from  "./routes/DelevryRoute/DeleteDelevryRoute.js"
import getdeleryRoute from  "./routes/DelevryRoute/GetDelevryRoute.js"


import createSupplierRoute from  "./routes/SupplierRoute/CreateSupplierRoute.js"
import updateSupplierRoute from  "./routes/SupplierRoute/UpdateSupplierRoute..js"
import deleteSupplierRoute from  "./routes/SupplierRoute/DeleteSupplierRoute..js"
import getSupplierRoute from  "./routes/SupplierRoute/GetSupplierRoute.js"

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api", createUserRoutes);
app.use("/api", getUserRoutes);
app.use("/apimail", mailRoutes);

// product 

app.use("/send",createProductRoute)  ;

app.use("/api",updateProductRoute)  ;


//employee 
app.use("/api",createEmployeeRoute)  ;
app.use("/api",getEmployeeRoute)  ;
app.use("/api",updateEmployeeRoute) ;
app.use("/api",deleteEmployeeRoute)

// delevry  createdeleryRoute
app.use("/api",createdeleryRoute)  ;
app.use("/api",updatedeleryRoute)  ;
app.use("/api",deletedeleryRoute)  ;
app.use("/api",getdeleryRoute)  ;

//Supplier 

app.use("/api",createSupplierRoute)  ;
app.use("/api",updateSupplierRoute)  ;
app.use("/api",deleteSupplierRoute)  ;
app.use("/api",getSupplierRoute)  ;

// category
app.use("/api",createCategoryRoute)  ;
app.use("/api",deleteCategoryRoute)  ;
app.use("/api",updateCategoryRoute)  ;
app.use("/api",getCategoryRoute)  ;








//auth routes can be added similarly

app.use("/api", registerRoute)  ;
app.use("/api",loginRoute)  ;
app.use("/api",logoutRoute)  ;




// Port
const PORT = 4000;

// Start server function
async function startServer() {
  try {
  
    await sequelize.authenticate();
    console.log("Database connected");

  
    await sequelize.sync();
    console.log("Database synced");

   
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });

  } catch (err) {
    console.error("Error starting server:", err);
    process.exit(1); // exit process if server fails
  }
}

// Top-level async IIFE to safely use await
(async () => {
  await startServer();
})();
