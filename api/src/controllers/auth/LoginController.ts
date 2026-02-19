import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";
import userDomain from "../../models/domain/auth/user/userDomain";
import Joi from "joi";
import generateAccessToken from "../../middleware/generateAccessToken";
import { generateRefreshToken } from "../../middleware/generateRefreshToken";
import { RequestAuth } from "../../middleware/verifyToken";
import { userRepo } from "../../repo/auth/userRepo/userRepo";

export default class LoginController extends BaseController {


  private _userDomain: userDomain;
  private _registerUserRepo: userRepo;
  constructor() {
    super();
    this._userDomain = new userDomain();
    this._registerUserRepo = new userRepo();
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

      const user = await this._registerUserRepo.FindUserByEmailLogin(email);


      if (!user) return this.unauthorized(res, "user not found  ");

//console.log("uuuuuuu  llllll  ",user)

      const isMatch = await this._userDomain.comparePassword(password, user.password);
    
if (!isMatch) return this.unauthorized(res, "Invalid credentials");

      


 const accessToken = await generateAccessToken(user.email, user.role, user.id);
 const refreshToken = await generateRefreshToken(user.email, user.role, user.id);
  const resultLogin = { accessToken, refreshToken, user: { id: user.id, email: user.email, role: user.role } }
 return this.resultValue(res,"login with success ",resultLogin);
 //user 11 eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIxMUB0ZXN0LmNvbSIsInJvbGUiOiJ1c2VyIiwiaWQiOjEwLCJpYXQiOjE3NzEyNzkyMTUsImV4cCI6MTc3MTMwNDQxNX0.CfG6GbFKxYLis1B2fvsoUIgA75ldL4v_tS4ac-3gut4
    } catch (error) {
      console.log(error)
    }
  }
}


