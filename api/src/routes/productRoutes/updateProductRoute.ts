

import { Request, Response, Router } from "express";
import FileHandler, { folderPath } from "../../filesystem/fileHandle";
import updateProductController from "../../controllers/products/updateProductController";

const router = Router();

 const   updateProductRoute  =  new updateProductController()  ;


 const fileHandler = new FileHandler( folderPath);
 router.put("/updateproduct/:id",fileHandler.uploadMiddlewareImage("imageName") ,(req:Request,res:Response) => {
    console.log("reqqqqqqq",req)
    updateProductRoute.execute(req,res)

 })

 export  default router