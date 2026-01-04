import { Request, Response, Router } from "express";
import createCategoryController from "../../controllers/category/createCategoryController.";


const router = Router();


const createCategoryRoute  =  new createCategoryController()





// ca  we give a name  to function uploadMiddleware  using on postman 
router.post("/createcategory", (req:Request,res:Response) => {
        console.log("req" , req.body)
    createCategoryRoute.execute(req,res)
})



export default router