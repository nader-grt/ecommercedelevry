import { Request, Response, Router } from "express";
import UpdateUserController from "../../controllers/users/updateUserController";
import { verifyToken } from "../../middleware/verifyToken";


const router = Router()

const updateUserRoute = new UpdateUserController()


router.put("/update/user/:id",verifyToken,(req:Request,res:Response) => {

    updateUserRoute.execute(req,res) ;
})

export default router