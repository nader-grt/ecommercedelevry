import { Request, Response, Router } from "express";
import DeleteSupplierController from "../../controllers/Supplier/DeleteSupplierController";




const router = Router();


const DeleteSupplierRoute  =  new DeleteSupplierController()




// ca  we give a name  to function uploadMiddleware  using on postman 
router.post("/create/delevry",(req:Request,res:Response) => {
   
    DeleteSupplierRoute.execute(req,res)
})



export default router