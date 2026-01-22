import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";
import { RequestAuth } from "../../middleware/verifyToken";
import DeleveryRepo from "../../repo/delevryRepo/DeleveryRepo";





export default class DeleteDelevryController extends BaseController {

            protected _deleveryRepo :DeleveryRepo

  constructor() {
    super();
           this._deleveryRepo  = new DeleveryRepo()
  }

  protected async executeImpl(req: RequestAuth, res: Response): Promise<any> {
  
   

    const {id}  = req.params;
    const deleveryId = Number(id) ;
    let deleveryFounded : any ;
    const userid = req.user?.id;

 
    
    try {

      let userDelevery :any = await DeleveryRepo.FindDelevryById(Number(userid)) ;
      deleveryFounded  =           await this._deleveryRepo.GetDelevryByID(Number(deleveryId))  

      if(deleveryFounded === null)
      {
          return this.notFound(res)
      }


     // console.log("userDelevery 1" ,userDelevery)
      console.log("get deleveryFounded 2",deleveryFounded) //3 userDelevery.id user 2 userDelevery.employee.id employee
                      await this._deleveryRepo.DeleteDelevryByID(Number(deleveryId),Number(userDelevery.employee.id),Number(userDelevery.id))
      return this.ok(res, "delevery deleted with success  ");
      
    } catch (error) {
      console.log(error)
    }

   
  }
}
