import { Request, Response, Router } from "express";
import { verifyToken } from "../../middleware/verifyToken";
import DeleteEmployeeController from "../../controllers/Employee/DeleteEmployeeController";




const router = Router();


const deleteEmployeeController  =  new DeleteEmployeeController()





router.delete("/delete/employee/:id",verifyToken,(req:Request,res:Response) => {
   
    deleteEmployeeController.execute(req,res)
})



export default router