import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";
import { User } from "../../models/main.js";
import IUser from "../../models/user";
import { userRepo } from "../../repo/userRepo/userRepo";

export default class getUserCOntroller extends BaseController
{
          
          private    _userRepo:userRepo  ;

          constructor()
          {super()
            this._userRepo = new userRepo()
          }



    public async IsExistUser(listusers :IUser[],userID:number):Promise<boolean>
    {

      for(const el of listusers)
      {
        if(el.id === userID )
             console.log("el",el)
        
      }

     //   const useList : typeof User[] =        await User.findAll() ;

        return true
    }


    protected async executeImpl(req: Request, res: Response): Promise<any> {
        
              console.log("req getUser",req)
              const userId  = Number(req.params.id)




              if (!Number.isInteger(userId) || userId <= 0)
                {
                        this.badRequest(res,`${userId} not valid must be number`)
                }

        
                       




                   try {
               
                          const gg  = await this._userRepo.FindAllUsers()
                    const listUsers:IUser[]  = await User.findAll()  ;
                    await this.IsExistUser(listUsers,userId)
                    

                    const user :any = await User.findByPk(userId);

                   // console.log("listUsers",listUsers)

                               
                  
                    return this.ok(res, user);
                   } catch (error) {
                    
                    if (!userId) {
                        return this.notFound(res, "User not found");
                      }
                   }
        
    }
}