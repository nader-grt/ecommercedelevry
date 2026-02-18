


import { Request, Response, Router } from "express";

import LoginController from "../../controllers/auth/LoginController";
import { verifyToken } from "../../middleware/verifyToken";


const loginRoute  =  new LoginController() ;


const router = Router();


 

   router.post("/login", verifyToken,(req:Request,res:Response) => {
    
    loginRoute.execute(req,res)    
});

export default router