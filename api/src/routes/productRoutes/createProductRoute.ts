import { Request, Response, Router } from "express";
import createProductController from "../../controllers/products/createProductController";

const router = Router();


const createProductRoute  =  new createProductController()



router.post("/createproduct",(req:Request,res:Response) => {

    createProductRoute.execute(req,res)
})



export default router