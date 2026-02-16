import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";



export default class GetAllUserCOntroller extends BaseController
{

         
               constructor()
               {super()
           
                 
               }

    protected async executeImpl(req: Request, res: Response): Promise<any> {
                   

                   try {
               

                          

                         //  return this.resultValue(res,"list users  ",resultListUsers)
                   } catch (error) {
                     console.log(error)
                   }
    }
}