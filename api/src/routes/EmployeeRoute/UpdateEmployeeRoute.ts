import { Request, Response, Router } from "express";
import { verifyToken } from "../../middleware/verifyToken";
import UpdateEmployeeController from "../../controllers/Employee/UpdateEmployeeController";




const router = Router();


const updateEmployeeController  =  new UpdateEmployeeController()





router.put("/update/employee/:id",verifyToken,(req:Request,res:Response) => {
   
    updateEmployeeController.execute(req,res)
})



export default router