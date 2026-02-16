


import { Request, Response, Router } from "express";

import LoginController from "../../controllers/auth/LoginController";
import { verifyToken } from "../../middleware/verifyToken";


const loginRoute  =  new LoginController() ;


const router = Router();


 

   router.post("/login", verifyToken,(req:Request,res:Response) => {
    console.log("Login req55555555555555555555555555555555555555" , req.body)
    loginRoute.execute(req,res)    
});

export default router