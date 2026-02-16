import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";





export default class UpdateUserController  extends BaseController
{
      

      
        constructor()
        {super()
     
          
        }

       protected async executeImpl(req: Request, res: Response): Promise<any> {
              const { firstName, lastName,email, address, phone ,city,} = req.body;
              const {id}  = req.params ;
          
                  
                        try {
                      
                       
                              return this.ok(res,"user updated with success ")
                        } catch (error) {
                            console.log(error)
                        }
       }
       
}