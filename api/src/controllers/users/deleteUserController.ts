import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";
import DeleteUserUseCase from "../../useCases/userUseCase/DeleteUserUseCase";



export default class DeleteUserController extends BaseController
{
 
       private _deleteUserUseCase!:DeleteUserUseCase
     constructor(deleteUserUseCase:DeleteUserUseCase)
     {super()
    
       this._deleteUserUseCase = deleteUserUseCase ;
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