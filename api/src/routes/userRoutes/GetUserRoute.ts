import { Request, Response, Router } from "express";

import { verifyToken } from "../../middleware/verifyToken";
import { userRepo } from "../../repo/auth/userRepo/userRepo";
import GetUserUseCase from "../../useCases/userUseCase/GetUserUseCase";
import GetUserController from "../../controllers/users/GetUserController";

const router = Router();

const useRepo = new userRepo();

const getUserUseCase = new GetUserUseCase(useRepo);

const getUserRoute = new GetUserController(getUserUseCase);

router.get("/user/:id", verifyToken, (req: Request, res: Response) => {
  console.log("object  obgetgggggggg ");
  getUserRoute.execute(req, res);
});

export default router;
