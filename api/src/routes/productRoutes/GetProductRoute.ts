import { Request, Response, Router } from "express";
import GetProductController from "../../controllers/products/GetProductController";
import { verifyToken } from "../../middleware/verifyToken";
import FileHandler, { folderPath } from "../../filesystem/fileHandle";



const router =Router()  ;
const fileHandler = new FileHandler(folderPath)
const getProductRoute  =  new GetProductController() ;



router.get("get/product",verifyToken,fileHandler.uploadMiddlewareImage("imageName"),(req:Request,res:Response) => {

    getProductRoute.execute(req,res) ;
})



export default router ;