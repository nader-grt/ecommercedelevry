import {Request, Response,  Router } from "express";
import RefreshTokenUseCase from "../../useCases/Auth/RefreshTokenUseCase";
import RefreshTokenController from "../../controllers/auth/RefreshTokenController";



const router = Router()

 const       refreshTokenUseCase     = new  RefreshTokenUseCase()
 const      RefreshTokenRoute       = new RefreshTokenController(refreshTokenUseCase)

 router.post("/refresh-token", (req:Request,res:Response) => {
    //    console.log("req \t **  " , req.body)
    RefreshTokenRoute.execute(req,res)
})

export default router