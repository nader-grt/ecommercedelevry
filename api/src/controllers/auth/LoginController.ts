import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";
import registerUserRepo from "../../repo/auth/userRepo/registerUserRepo";
import userDomain from "../../models/domain/auth/user/userDomain";
import Joi from "joi";
import generateAccessToken from "../../middleware/generateAccessToken";
import { generateRefreshToken } from "../../middleware/generateRefreshToken";
import { RequestAuth } from "../../middleware/verifyToken";

export default class LoginController extends BaseController {


  private _userDomain: userDomain;
  private _registerUserRepo: registerUserRepo;
  constructor() {
    super();
    this._userDomain = new userDomain();
    this._registerUserRepo = new registerUserRepo();
  }

  protected async executeImpl(req: RequestAuth, res: Response): Promise<any> {
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


    const userInputLogin: any = {
      email: email,
      password: password,
    };

    const userSchemaLogin = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(5).required(),
    });

    try {
      //const { error, value } = userSchema.validate(userInput);

      const { error, value } = userSchemaLogin.validate(userInputLogin);

     
      if (error) {
            return this.badRequest(res, error.details[0].message);
          }

      const user = await this._registerUserRepo.FindUserByEmail(email);


      if (!user) return this.unauthorized(res, "user not found  ");



      const isMatch = await this._userDomain.comparePassword(password, user.password);
    
if (!isMatch) return this.unauthorized(res, "Invalid credentials");

      


 const accessToken = await generateAccessToken(user.email, user.role, user.id);
 const refreshToken = await generateRefreshToken(user.email, user.role, user.id);
  const resultLogin = { accessToken, refreshToken, user: { id: user.id, email: user.email, role: user.role } }
 return this.resultValue(res,"login with success ",resultLogin);
    } catch (error) {
      console.log(error)
    }
  }
}


