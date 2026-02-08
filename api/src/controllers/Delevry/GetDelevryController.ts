import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";
import { RequestAuth } from "../../middleware/verifyToken";
import DeleveryRepo from "../../repo/delevryRepo/DeleveryRepo";





export default class GetDelevryController extends BaseController {


                    protected _deleveryRepo:DeleveryRepo
  constructor() {
    super();
                 this._deleveryRepo  = new DeleveryRepo()
  
  }

  protected async executeImpl(req: RequestAuth, res: Response): Promise<any> {

   const { id } = req.params;  
   const delevryid = Number(id) ;

   console.log("idddddddddddddd" ,typeof delevryid)

   
    
    try {
     
        const delevryResult :any =           await this._deleveryRepo.GetDelevryByID(delevryid)  
        if (delevryResult === null) {
          return this.notFound(res, "delivery not found ");
        }
        //employee?.deliverer
    //    const delevery : any = delevryResult.employee?.deliverer
        return this.resultValue(res, "get delevry   with success ",{delevryResult});
    } catch (error) {
      
    }

   // return this.ok(res, "product created with success ok");
  }
}
