import { Request, Response, Router } from "express";
import createCategoryController from "../../controllers/category/createCategoryController.";
import GetCategoryController from "../../controllers/category/GetCategoryController";
import { verifyToken } from "../../middleware/verifyToken";


const router = Router();


const getCategoryRoute  =  new GetCategoryController()






router.get("/get/category/:id",verifyToken, (req:Request,res:Response) => {
        console.log("req" , req.body)
        getCategoryRoute.execute(req,res)
})



export default router