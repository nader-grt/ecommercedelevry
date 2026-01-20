import { Request, Response, Router } from "express";


import CreateDelevryController from "../../controllers/Delevry/CreateDelevryController";

const router = Router();


const createDelevryRoute  =  new CreateDelevryController()




// ca  we give a name  to function uploadMiddleware  using on postman 
router.post("/create/delevry",(req:Request,res:Response) => {
   
    createDelevryRoute.execute(req,res)
})



export default router