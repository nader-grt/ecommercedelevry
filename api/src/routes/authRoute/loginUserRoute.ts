


import { Request, Response, Router } from "express";

import LoginController from "../../controllers/auth/LoginController";
import { verifyToken } from "../../middleware/verifyToken";
import { userRepo } from "../../repo/auth/userRepo/userRepo";
import LoginUseCase from "../../useCases/Auth/LoginUseCase";


const   loginUserrepo = new userRepo();
 const loginUserUseCase  = new LoginUseCase(loginUserrepo)

const loginRoute  =  new LoginController(loginUserUseCase) ;


const router = Router();


 

   router.post("/login", verifyToken,(req:Request,res:Response) => {
    console.log("llllllllllllllllllllllll ")
    loginRoute.execute(req,res)    
});

export default router