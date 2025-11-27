import { Request, Response, Router } from "express";
import createProductController from "../../controllers/products/createProductController";
import FileHandler, { folderPath } from "../../filesystem/fileHandle";

const router = Router();


const createProductRoute  =  new createProductController()




//folderPath
const fileHandler = new FileHandler( folderPath);
// ca  we give a name  to function uploadMiddleware  using on postman 
router.post("/createproduct", fileHandler.uploadMiddlewareImage("imageName") ,(req:Request,res:Response) => {
   
    createProductRoute.execute(req,res)
})



export default router