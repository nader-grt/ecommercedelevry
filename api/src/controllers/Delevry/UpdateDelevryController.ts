import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";
import { RequestAuth } from "../../middleware/verifyToken";
import DeleveryRepo from "../../repo/delevryRepo/DeleveryRepo";





export default class UpdateDelevryController extends BaseController {

    protected _DeleveryRepo:DeleveryRepo;

  constructor() {
    super();
    this._DeleveryRepo  = new DeleveryRepo() ;
  
  }

  protected async executeImpl(req: RequestAuth, res: Response): Promise<any> {
   // const { id } = req.params;  
 

    const { workingTime,carType} =
    req.body;

   // const delevryid = Number(id) ;

    const userid = req.user?.id;
    console.log("Number(userid) Number(userid)   ",Number(userid))
    try {
     
        let delevryResult :any =           await DeleveryRepo.FindDelevryById(Number(userid))  
             let delevery :any = delevryResult.employee?.deliverer
            if(delevery === null)
            {
                return this.notFound(res)
            }

            console.log("delevery delevery update ",delevery)
            if(workingTime)
            {
                delevery.workingTime = workingTime;
            }

         
            if(carType)
                {
                    delevery.carType = carType 
                }


                console.log("before  enter sequilze " ,delevery)
              let delevryResultValue =      await this._DeleveryRepo.UpdateDelevryByID(delevery,Number(delevery.id)) ;


              console.log("After    sequilze " ,delevryResultValue)
              if(delevryResultValue)
              {
                return this.ok(res," delevry updated ")
              }
      
    } catch (error) {
      console.log(error)
    }

    return this.ok(res, "updated delevry   with success ok");
  }
}
