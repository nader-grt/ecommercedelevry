import { Request, Response, Router } from "express";
import GetAllUserCOntroller from "../../controllers/users/getAllUserController";
import { verifyToken } from "../../middleware/verifyToken";
import { userRepo } from "../../repo/auth/userRepo/userRepo";
import GetAllUserUseCase from "../../useCases/userUseCase/GetAllUserUseCase";

const userepo = new userRepo();
const getAllUserUsecase = new GetAllUserUseCase(userepo);
const getAllUserIsRoleUserRoute = new GetAllUserCOntroller(getAllUserUsecase);

const router = Router();

router.get("/all/users/", verifyToken, (req: Request, res: Response) => {
  getAllUserIsRoleUserRoute.execute(req, res);
});

export default router;
