import express from "express";
import { sequelize } from "./models/main.js"; // make sure your path is correct

import createUserRoutes from "./routes/userRoutes/createUserRoute.js";

import getUserRoutes from "./routes/userRoutes/getUserRoute.js"
import mailRoutes from "./routes/userRoutes/sendUserMailRoute.js";
import createProductRoute from "./routes/productRoutes/createProductRoute.js";
import updateProductRoute from "./routes/productRoutes/updateProductRoute.js";

import createCategoryRoute from "./routes//categoryRoute/createCategoryRoute.js";


import registerRoute from "./routes/authRoute/registerUserRoute.js";
import loginRoute from "./routes/authRoute/loginUserRoute.js";
import logoutRoute from "./routes/authRoute/logoutUserRoute.js";


import createemployeeRoute from  "./routes/EmployeeRoute/CreateEmployeeRoute.js"

import createdeleryRoute from  "./routes/DelevryRoute/CreateDelevryRoute.js"
import updatedeleryRoute from  "./routes/DelevryRoute/UpdateDelevryRoute..js"
import deletedeleryRoute from  "./routes/DelevryRoute/DeleteDelevryRoute..js"
import getdeleryRoute from  "./routes/DelevryRoute/GetDelevryRoute..js"




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
app.use("/api",createemployeeRoute)  ;

// delevry  createdeleryRoute
app.use("/api",createdeleryRoute)  ;
app.use("/api",updatedeleryRoute)  ;
app.use("/api",deletedeleryRoute)  ;
app.use("/api",getdeleryRoute)  ;



// category
app.use("/api",createCategoryRoute)  ;









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
