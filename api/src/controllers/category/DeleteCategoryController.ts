import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";





export default class DeleteCategoryController extends BaseController
{


       constructor()
       {
        super() ;
       }
      protected async executeImpl(req: Request, res: Response): Promise<any> {
          
      }
}