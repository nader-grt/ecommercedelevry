import { Request, Response, Router } from "express";
import CreateEmployeeController from "../../controllers/Employee/CreateEmployeeController";
import { verifyToken } from "../../middleware/verifyToken";




const router = Router();


const createEmployeeController  =  new CreateEmployeeController()




// ca  we give a name  to function uploadMiddleware  using on postman 
router.post("/create/employee",verifyToken,(req:Request,res:Response) => {
   
    createEmployeeController.execute(req,res)
})



export default router