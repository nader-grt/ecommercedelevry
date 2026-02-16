import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";



export default class DeleteUserController extends BaseController
{
 
     constructor()
     {super()
    
       
     }
    protected async executeImpl(req: Request, res: Response): Promise<any> 
    {
        const {id}  = req.params ;
   
                try {
                    
                   
             
             

                         
                   
                          
              return 
                } catch (error) {
                    console.log(error)
                }
        
    }
}