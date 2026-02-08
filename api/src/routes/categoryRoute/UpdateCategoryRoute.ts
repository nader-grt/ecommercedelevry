import { Request, Response, Router } from "express";

import UpdateCategoryController from "../../controllers/category/UpdateCategoryController";
import { verifyToken } from "../../middleware/verifyToken";


const router = Router();


const updateCategoryRoute  =  new UpdateCategoryController()




router.put("/update/category",verifyToken, (req:Request,res:Response) => {
       // console.log("req *******  up " , req.body)
        updateCategoryRoute.execute(req,res)
})



export default router