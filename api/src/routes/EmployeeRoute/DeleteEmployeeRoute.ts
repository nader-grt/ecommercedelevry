import { Request, Response, Router } from "express";
import { verifyToken } from "../../middleware/verifyToken";
import DeleteEmployeeController from "../../controllers/Employee/DeleteEmployeeController";
import EmployeeRepo from "../../repo/employeeRepo/EmployeeRepo";
import DeleteEmployeeUseCase from "../../useCases/EmployeeUseCase/DeleteEmployeeUseCase";




const router = Router();

const empRepo = new EmployeeRepo()  ;

const deleteEmployeeUseCase  = new  DeleteEmployeeUseCase(empRepo)


const deleteEmployeeController  =  new DeleteEmployeeController(deleteEmployeeUseCase)





router.delete("/delete/employee/:id",verifyToken,(req:Request,res:Response) => {
   
    deleteEmployeeController.execute(req,res)
})



export default router