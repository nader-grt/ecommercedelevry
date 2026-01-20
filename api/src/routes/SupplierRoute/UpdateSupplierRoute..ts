import { Request, Response, Router } from "express";


import UpdateSupplierController from "../../controllers/Supplier/UpdateSupplierController";

const router = Router();


const UpdateSupplierRoute  =  new UpdateSupplierController()




// ca  we give a name  to function uploadMiddleware  using on postman 
router.post("/update/supplier",(req:Request,res:Response) => {
   
    UpdateSupplierRoute.execute(req,res)
})



export default router