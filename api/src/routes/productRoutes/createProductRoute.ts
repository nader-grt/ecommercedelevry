import { Request, Response, Router } from "express";
import createProductController from "../../controllers/products/createProductController";
import FileHandler, { folderPath } from "../../filesystem/fileHandle";
import { verifyToken } from "../../middleware/verifyToken";

const router = Router();


const createProductRoute  =  new createProductController()




//folderPath
export    const fileHandlerCreate = new FileHandler( folderPath);
// ca  we give a name  to function uploadMiddleware  using on postman 
router.post("/create/product",verifyToken, fileHandlerCreate.uploadMiddlewareImage("imageName") ,(req:Request,res:Response) => {
   
    console.log(" create productttttt   route  1")
    createProductRoute.execute(req,res)
})



export default router