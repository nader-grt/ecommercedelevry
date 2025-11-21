import { Request, Response, Router } from "express";
import createUserCOntroller from "../../controllers/users/createUserController";


const router = Router();



const createUser = new createUserCOntroller();



router.post("/users", async (req: Request, res: Response) => {
  await createUser.execute(req, res);
});




export default router;
