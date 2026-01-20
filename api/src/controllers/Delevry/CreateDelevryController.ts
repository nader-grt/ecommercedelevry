import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";
import DeleveryRepo from "../../repo/delevryRepo/DeleveryRepo";
import DelevryDomain from "../../models/domain/deleveryDomain/DelevryDomain";
import userDomain from "../../models/domain/auth/user/userDomain";
import { IRegisterUserRequestDTO } from "../auth/RegisterController";
import UserRepo from "../../repo/auth/userRepo/registerUserRepo";
import { userRepo } from "../../repo/userRepo/userRepo";
import { RequestAuth } from "../../middleware/verifyToken";


export default interface IDelevry
{

 
  workingTime:string ;
  carType:string;
  employeeId?:number;

}



export default class CreateDelevryController extends BaseController {

      protected _DeleveryRepo:DeleveryRepo;
      
      protected _DelevryDomain:DelevryDomain;
      protected _userDomain: userDomain;
      protected _delevryUserRepo: UserRepo;


      private async _ReadDelevry(
        delevryRequest: IDelevry
      ): Promise<any> {
  
    
        
    
        return {
          workingTime: (this._DelevryDomain.setWorkingTime = delevryRequest.workingTime),
          carType: (this._DelevryDomain.setCarType = delevryRequest.carType),
          employeeId: delevryRequest.employeeId,
      
        };
    
       
      }


      private createDelevryDomain(
        delevryRequest: IDelevry,
        employeeId: number
      ): DelevryDomain {
      
        const delevry = new DelevryDomain();
      
        delevry.setWorkingTime = delevryRequest.workingTime;
        delevry.setCarType = delevryRequest.carType;
        delevry.setDelevryId = employeeId;
      
        return delevry;
      }

  constructor() {
    super();
    this._DeleveryRepo  = new DeleveryRepo() ;
    this._DelevryDomain =  new DelevryDomain()
    this._userDomain  = new userDomain() ;
    this._delevryUserRepo = new UserRepo() ;
  
  }

  protected async executeImpl(req: RequestAuth, res: Response): Promise<any> {
    const { workingTime,carType} =
    req.body;
    const delevryId = req.user?.id;


    const dtoDelevry: any = {
        workingTime,
        carType,
      
      };

      const resultDelevryDTO = await this._ReadDelevry(dtoDelevry);

       let   delevryDomain:any ;
       let userIsDelevry :any ;
      



    
    try {
     
        if(delevryId)
            {
             delevryDomain =  await   this.createDelevryDomain(resultDelevryDTO,delevryId) ;
             userIsDelevry = await this._DeleveryRepo.getUserDelevredById(delevryId)  ;
            }
 
 
 
        console.log("  delevryDomain *-***** ", delevryDomain ,"userIsDelevry  ",userIsDelevry ,"delevryId" ,delevryId)

                        await this._DeleveryRepo.createDelevry(delevryDomain)

                        this.ok(res, { message: "delevry  created  successfully" });
    } catch (error) {
      
    }

   // return this.ok(res, "delevry created with success ok1");
  }
}
