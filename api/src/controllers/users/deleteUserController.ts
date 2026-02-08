import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";
import userDomain from "../../models/domain/auth/user/userDomain";
import IUserResponse, { userRepo } from "../../repo/userRepo/userRepo";


export default class DeleteUserController extends BaseController
{
    private _userDomain:userDomain ;
    private  _userRepo:userRepo;
     constructor()
     {super()
      this._userDomain = new userDomain() ;
      this._userRepo = new userRepo();
       
     }
    protected async executeImpl(req: Request, res: Response): Promise<any> 
    {
        const {id}  = req.params ;
        const userId :number = Number(id)  ;
        let  resultUser :any | null ;
        const isExistUser:boolean | any =    await userRepo.existUserId(userId)
                try {
                    
                   
             
                    if(!isExistUser)
                    {
                           return this.notFound(res,`this user not exist by ${userId}`)
                    }
                
                           const user: IUserResponse[]  = await this._userRepo.FindUserById(userId) ; 

                         
                            if(user[0].id === userId)
                            {
                              //  console.log("uuuuuuuuuuu  ",user )
                                resultUser = await this._userRepo.DeleteUser(userId)  ;

                            }

                         
                        if(resultUser ===  null || resultUser === undefined)
                        {
                          
                            return this.ok(res,"user deletet ")
                        }
                          
              return 
                } catch (error) {
                    console.log(error)
                }
        
    }
}