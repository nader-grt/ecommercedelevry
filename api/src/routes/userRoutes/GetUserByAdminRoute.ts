import { Request, Response, Router } from "express";

import { verifyToken } from "../../middleware/verifyToken";

import { UserControllerFactory } from "../../FactoryUsers/FactroryUser";

const router = Router();



router.get("/users/:id", verifyToken, (req: Request, res: Response) => {
  UserControllerFactory.createGetUserByAdminController().execute(req, res);
});

export default router;
