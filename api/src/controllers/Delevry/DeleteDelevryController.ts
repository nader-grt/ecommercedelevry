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
   // let  data:any | null   = null;

 
    
    try {

     let empDelevry  =   await  this._deleveryRepo.getEmployeeIsDelevredById(6) ;
          
    let  data:any  = empDelevry.get({ plain: true });

  
    const { TusersID: userId, employee } = data;
    const empId = employee?.TempID;
    
    console.log({ userId, empId });


      deleveryFounded  =           await this._deleveryRepo.GetDelevryByID(Number(deleveryId))  

      if(deleveryFounded === null)
      {
          return this.notFound(res)
      }

//(delevryid:number,empId?:number,userid?:number)
 
     console.log("get deleveryFounded 2",deleveryFounded) 
                    await this._deleveryRepo.DeleteDelevryByID(Number(deleveryFounded.id),Number(empId),Number(userId))
      return this.ok(res, "delevery deleted with success  ");
      
    } catch (error) {
      console.log(error)
    }

   
  }
}
