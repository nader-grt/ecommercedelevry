import { Request, Response, Router } from "express";
import UpdateUserController from "../../controllers/users/updateUserController";
import { verifyToken } from "../../middleware/verifyToken";
import UpdateUserUseCase from "../../useCases/userUseCase/UpdateUserUseCase";
import { userRepo } from "../../repo/auth/userRepo/userRepo";

const router = Router();

const useRepo = new userRepo();
const updateuserUseCase = new UpdateUserUseCase(useRepo);
const updateUserRoute = new UpdateUserController(updateuserUseCase);

router.put("/update/user/:id", verifyToken, (req: Request, res: Response) => {
  updateUserRoute.execute(req, res);
});

export default router;
