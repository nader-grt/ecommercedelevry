import { Request, Response, Router } from "express";
import DeleteUserController from "../../controllers/users/deleteUserController";
import { verifyToken } from "../../middleware/verifyToken";




const router = Router() ;

const deleteUserRoute = new DeleteUserController() ;


router.delete("/delete/user/:id",verifyToken,(req:Request,res:Response) => {

    deleteUserRoute.execute(req,res) ;
})


export default router