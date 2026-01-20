import { Request, Response, Router } from "express";


import CreateSupplierController from "../../controllers/Supplier/CreateSupplierController";

const router = Router();


const createSupplierRoute  =  new CreateSupplierController()




// ca  we give a name  to function uploadMiddleware  using on postman 
router.post("/create/supplier",(req:Request,res:Response) => {
   
    createSupplierRoute.execute(req,res)
})



export default router