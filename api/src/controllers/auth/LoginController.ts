import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";
import registerUserRepo from "../../repo/auth/userRepo/registerUserRepo";
import userDomain from "../../models/domain/auth/user/userDomain";
import Joi from "joi";

export default class LoginController extends BaseController {
  //userDomain
  //registerUserRepo

  private _userDomain: userDomain;
  private _registerUserRepo: registerUserRepo;
  constructor() {
    super();
    this._userDomain = new userDomain();
    this._registerUserRepo = new registerUserRepo();
  }

  protected async executeImpl(req: Request, res: Response): Promise<any> {
    const { email, password } = req.body;
    // steps
    /**
     *
     * 1. validate input
     * 2. check if user exists
     * 3. compare password
     * 4. generate token
     * 5. send response
     */

    console.log("LoginController executeImpl called with:", req.body);
    const userInputLogin: any = {
      email: email,
      password: password,
    };

    const userSchemaLogin = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
    });

    try {
      //const { error, value } = userSchema.validate(userInput);

      const { error, value } = userSchemaLogin.validate(userInputLogin);

     
      if (error) {
            return this.badRequest(res, error.details[0].message);
          }

      const user = await this._registerUserRepo.FindUserByEmail(email);

      
    } catch (error) {}
  }
}


