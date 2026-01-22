import { Request, Response, Router } from "express";
import { verifyToken } from "../../middleware/verifyToken";
import GetEmployeeController from "../../controllers/Employee/GetEmployeeController";




const router = Router();


const getEmployeeController  =  new GetEmployeeController()





router.get("/get/employee/:id",verifyToken,(req:Request,res:Response) => {
   
    getEmployeeController.execute(req,res)
})



export default router