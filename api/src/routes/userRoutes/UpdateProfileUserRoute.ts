import { Request, Response, Router } from "express";

import { verifyToken } from "../../middleware/verifyToken";
import { UserControllerFactory } from "../../FactoryUsers/FactroryUser";


const router = Router();



router.put("/update/user/", verifyToken, (req: Request, res: Response) => {
    UserControllerFactory.createGetProfileController().execute(req, res);
});

export default router;
