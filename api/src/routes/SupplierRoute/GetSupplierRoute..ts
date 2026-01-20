import { Request, Response, Router } from "express";
import GetSupplierController from "../../controllers/Supplier/GetSupplierController";



const router = Router();


const GetSupplierRoute  =  new GetSupplierController()




// ca  we give a name  to function uploadMiddleware  using on postman 
router.post("/get/supplier",(req:Request,res:Response) => {
   
    GetSupplierRoute.execute(req,res)
})



export default router