import { Request, Response, Router } from "express";
import DeleteUserController from "../../controllers/users/deleteUserController";
import { verifyToken } from "../../middleware/verifyToken";
import { userRepo } from "../../repo/auth/userRepo/userRepo";
import DeleteUserUseCase from "../../useCases/userUseCase/DeleteUserUseCase";

const router = Router();
const useRepo = new userRepo();
const deleteUserUseCase = new DeleteUserUseCase(useRepo);
const deleteUserRoute = new DeleteUserController(deleteUserUseCase);

router.delete(
  "/delete/user/:id",
  verifyToken,
  (req: Request, res: Response) => {
    deleteUserRoute.execute(req, res);
  }
);

export default router;
