import  { Request, Response, Router } from "express";
import getUserCOntroller from "../../controllers/users/getUserController";

const router = Router();


const getUserById = new getUserCOntroller()






router.get("/user/:id", async (req: Request, res: Response) => {
    await getUserById.execute(req, res);
   });


   export default  router