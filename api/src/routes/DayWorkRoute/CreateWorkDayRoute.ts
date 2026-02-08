import { Request, Response, Router } from "express";
import CreateDayWorkController from "../../controllers/DayWorkName/CreateDayWorkController";
import { verifyToken } from "../../middleware/verifyToken";




const createWorkDayRoute = new CreateDayWorkController()

const route = Router()


route.post("/create/nameday",verifyToken,(req:Request,res:Response) => {

    createWorkDayRoute.execute(req,res)  ;
})



export default route