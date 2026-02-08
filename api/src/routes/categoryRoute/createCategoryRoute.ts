import { Request, Response, Router } from "express";
import createCategoryController from "../../controllers/category/createCategoryController.";
import { verifyToken } from "../../middleware/verifyToken";


const router = Router();


const createCategoryRoute  =  new createCategoryController()





// ca  we give a name  to function uploadMiddleware  using on postman 
router.post("/create/category", verifyToken,(req:Request,res:Response) => {
        console.log("req" , req.body)
    createCategoryRoute.execute(req,res)
})



export default router