import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";
import userDomain from "../../models/domain/auth/user/userDomain";
import IUserResponse, { userRepo } from "../../repo/userRepo/userRepo";
import UserRepo from "../../repo/auth/userRepo/registerUserRepo";


export default class UpdateUserController  extends BaseController
{
       private _userDomain:userDomain ;
       private  _userRepo:userRepo;

                private _ReadUserById(user:IUserResponse,userId :number)
                {
                       const u :any | null = new userDomain() ;
                       u.setFirstName = user.firstName ;
                       u.setLastName = user.lastName ;
                       u.setEmail    = user.email;
                       u.setPhone    = user.phone ;
                       u.setAddress  = user.address ;

                       return u ;

                }
        constructor()
        {super()
         this._userDomain = new userDomain() ;
         this._userRepo = new userRepo();
          
        }

       protected async executeImpl(req: Request, res: Response): Promise<any> {
              const { firstName, lastName,email, address, phone ,city,} = req.body;
              const {id}  = req.params ;
              const userId :number = Number(id)  ;
              let user :IUserResponse | any ;
                     const   dto :any = {
                            firstName, lastName,email, address, phone ,city
                        }
                        try {
                            const isUserExist = await UserRepo.IsExistUser(email) ;
                            if(!isUserExist)
                            {
                               return this.notFound(res,"user not found ") ;    
                            }
                            user  = this._ReadUserById(dto,userId)  ;
                            console.log("user updatedddd  ",user,"userId  ",userId)
                                await this._userRepo.updateUser(user,userId)
                              return this.ok(res,"user updated with success ")
                        } catch (error) {
                            console.log(error)
                        }
       }
       
}