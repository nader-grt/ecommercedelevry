import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";





export default class CreateSupplierController extends BaseController {



  constructor() {
    super();
  
  }

  protected async executeImpl(req: Request, res: Response): Promise<any> {
    const { name, price } = req.body;
    const  file:any  = req.file



 
    
    try {
     
      
    } catch (error) {
      
    }

    return this.ok(res, "product created with success ok");
  }
}
