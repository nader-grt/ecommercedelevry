import { Request, Response, Router } from "express";

import DeleteCategoryController from "../../controllers/category/DeleteCategoryController";
import { verifyToken } from "../../middleware/verifyToken";

const router = Router();


const deleteCategoryRoute  =  new DeleteCategoryController()






router.delete("/delete/category/:id", verifyToken ,(req:Request,res:Response) => {
        console.log("req delete categoryy  " )
        deleteCategoryRoute.execute(req,res)
})



export default router