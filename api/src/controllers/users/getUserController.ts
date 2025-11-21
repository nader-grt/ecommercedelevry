import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";
import { userRepo } from "../../repo/userRepo/userRepo";

export default class getUserCOntroller extends BaseController {
  private _userRepo: userRepo;

  constructor() {
    super();
    this._userRepo = new userRepo();
  }


  protected async executeImpl(req: Request, res: Response): Promise<any> {
    console.log("req getUser", req);
    const userId = Number(req.params.id);

    if (!Number.isInteger(userId) || userId <= 0) {
      this.badRequest(res, `${userId} not valid must be number`);
    }


          

    try {

        const user :any =        await userRepo.existUserId(userId)
              console.log("uuuuuuuuu",user)


   

   

    

      return this.ok(res, user);
    } catch (error) {
      if (!userId) {
        return this.notFound(res, "User not found");
      }
    }
  }
}
