import express from "express";
import { sequelize } from "./models/main.js"; // make sure your path is correct

import createUserRoutes from "./routes/userRoutes/createUserRoute.js";

import getUserRoutes from "./routes/userRoutes/getUserRoute.js"
import mailRoutes from "./routes/userRoutes/sendUserMailRoute.js";


//v   product route


import createProductRoute from "./routes/productRoutes/createProductRoute.js";


const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api", createUserRoutes);
app.use("/api", getUserRoutes);
app.use("/apimail", mailRoutes);

// product 

app.use("/send",createProductRoute)  ;







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
