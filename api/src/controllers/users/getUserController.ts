import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";
import IUserResponse, { userRepo } from "../../repo/userRepo/userRepo";
import userDomain from "../../models/domain/auth/user/userDomain";
import { any } from "joi";

export default class GetUserCOntroller extends BaseController {
  private _userDomain:userDomain ;
              private  _userRepo:userRepo;
               constructor()
               {super()
                this._userDomain = new userDomain() ;
                this._userRepo = new userRepo();
                 
               }

  protected async executeImpl(req: Request, res: Response): Promise<any> {
    //console.log("req getUser", req);
  
    const {id} = req.params ;
    const userId = Number(id);

    if (!Number.isInteger(userId) || userId <= 0) {
      this.badRequest(res, `${userId} not valid must be number`);
    }


          

    try {


      //  console.log(" userId  get userId  ",userId)
         const isExistUser:boolean | any =    await userRepo.existUserId(userId)
             
    if(!isExistUser)
    {
            return this.notFound(res,`this user not exist by ${userId}`)
    }

           const user: IUserResponse  = await this._userRepo.FindUserById(userId) ;

     
               const  userValue =        await this._userDomain.toGetAllUsers(user) ;

           
           return this.resultValue(res,"user founded ",userValue) ;

   

    

      //return this.ok(res, user);
    } catch (error) {
         console.log(error)
    }
  }
}
