import { Request, Response, Router } from "express";
import GetAllCategoriesController from "../../controllers/category/GetAllCategoriesController";
import { verifyToken } from "../../middleware/verifyToken";



const getAllCategoriesRoute = new GetAllCategoriesController()

const router = Router() ;


router.get("/all/categories",verifyToken,(req:Request,res:Response)=> {

    getAllCategoriesRoute.execute(req,res)  ;

})



export default router 