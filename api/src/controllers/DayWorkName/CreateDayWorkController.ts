import { Request, Response } from "express"
import { BaseController } from "../../infra/BaseCOntroller"
import DayWorkDomain from "../../models/domain/DayWorkDomain/DayWorkDomain";
import DayWorkRepo from "../../repo/dayWorkRepo/DayWorkRepo";
import { RequestAuth } from "../../middleware/verifyToken";



export default class CreateDayWorkController extends BaseController
{

protected __dayWorkDomain:DayWorkDomain;
protected  _dayWorkRepo:DayWorkRepo
      constructor()
      {
        super();
         this.__dayWorkDomain = new DayWorkDomain() ;
         this._dayWorkRepo  =  new DayWorkRepo()
      }
  protected  async executeImpl(req: RequestAuth, res: Response): Promise<any> {
      const {nameDay}  = req.body ;


      try {
         
        const nameWorkDay = new DayWorkDomain() ;

        if(nameDay)
        {
            nameWorkDay.setNameDay = nameDay ;
        }

             await this._dayWorkRepo.createNameDay(nameWorkDay) ;
          return this.ok(res,"create name day with success") ;
      } catch (error) {
        
      }

  }
    
}