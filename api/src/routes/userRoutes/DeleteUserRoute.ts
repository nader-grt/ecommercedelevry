import { Request, Response, Router } from "express";
import { verifyToken } from "../../middleware/verifyToken";
import { UserControllerFactory } from "../../FactoryUsers/FactroryUser";

const router = Router();


router.delete( "/delete/user/:id", verifyToken, (req: Request, res: Response) => 
  {
    UserControllerFactory.DeleteUserrController().execute(req, res);
  }
);

export default router;
