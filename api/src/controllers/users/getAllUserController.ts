import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";
import userDomain from "../../models/domain/auth/user/userDomain";
import { userRepo } from "../../repo/userRepo/userRepo";


export default class GetAllUserCOntroller extends BaseController
{

              private _userDomain:userDomain ;
              private  _userRepo:userRepo;
               constructor()
               {super()
                this._userDomain = new userDomain() ;
                this._userRepo = new userRepo();
                 
               }

    protected async executeImpl(req: Request, res: Response): Promise<any> {
                   

                   try {
                   const users =    await userRepo.FindAllUsersByRoleIsUser("user") ;
                   if(users.length === 0)
                   {
                      return this.notFound(res,"users not found ") ;
                   }

                           const resultListUsers = await this._userDomain.toGetAllUsers(users) ;

                           return this.resultValue(res,"list users  ",resultListUsers)
                   } catch (error) {
                     console.log(error)
                   }
    }
}