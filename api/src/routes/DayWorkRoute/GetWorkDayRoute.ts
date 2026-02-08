import { Request, Response, Router } from "express";



import { verifyToken } from "../../middleware/verifyToken";
import GetDayWorkController from "../../controllers/DayWorkName/GetDayWorkController";

const router = Router();


const getWorkDayRoute  =  new GetDayWorkController()




router.get("/get/nameday",verifyToken,(req:Request,res:Response) => {
   
    getWorkDayRoute.execute(req,res)
})



export default router