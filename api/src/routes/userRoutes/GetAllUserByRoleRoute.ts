import { Request, Response, Router } from "express";
import GetAllUserCOntroller from "../../controllers/users/getAllUserController";
import { verifyToken } from "../../middleware/verifyToken";




 const getAllUserIsRoleUserRoute = new GetAllUserCOntroller() ;

 const router = Router() ;

 router.get("/all/users/",verifyToken,(req:Request,res:Response)=> {
    getAllUserIsRoleUserRoute.execute(req,res) ;
 })

 export default router