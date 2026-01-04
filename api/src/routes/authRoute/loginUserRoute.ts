


import { Request, Response, Router } from "express";

import LoginController from "../../controllers/auth/LoginController";




const router = Router();


   const loginUserRoute  =  new LoginController() ;

   router.post("/login", (req:Request,res:Response) => {
    console.log("Logout req" , req.body)
    loginUserRoute.execute(req,res)    
});

export default router