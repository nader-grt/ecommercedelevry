import  { Request, Response, Router } from "express";
import GetUserCOntroller from "../../controllers/users/getUserController";
import { verifyToken } from "../../middleware/verifyToken";


const router = Router();


const getUserRoute = new GetUserCOntroller()






router.get("/user/:id",verifyToken,  (req: Request, res: Response) => {
    console.log("object  obgetgggggggg ")
     getUserRoute.execute(req, res);
   });


   export default  router