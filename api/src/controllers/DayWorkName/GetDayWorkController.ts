import { Request, Response } from "express"
import { BaseController } from "../../infra/BaseCOntroller"
import DayWorkDomain from "../../models/domain/DayWorkDomain/DayWorkDomain";
import DayWorkRepo from "../../repo/dayWorkRepo/DayWorkRepo";

export default interface IResponseDayWeek
{
    id:number ;
    nameDay:string;
    
}

export default class GetDayWorkController extends BaseController
{

       private getAllNameDays(workDay: IResponseDayWeek[]): IResponseDayWeek[]
       {

        const simpleDays :any = workDay.map(day => ({
            id: day.id,
            nameDay: day.nameDay
          }));
         // console.log("simpl   ",simpleDays)
           return simpleDays
       }

    protected _dayWorkDomain:DayWorkDomain;
protected  _dayWorkRepo:DayWorkRepo
      constructor()
      {
        super();
         this._dayWorkDomain = new DayWorkDomain() ;
         this._dayWorkRepo  =  new DayWorkRepo()
      }
  protected  async executeImpl(req: Request, res: Response): Promise<any> {
      

             try {
                

               const nameDays :any =       await this._dayWorkRepo.GetAllNameDays()  ;

               console.log("nameDays  nameDays " ,typeof nameDays  ,nameDays)
                 const resultNameDay :any = this.getAllNameDays(nameDays)

                return this.resultValue(res,"all days in week ",resultNameDay)
                 
             } catch (error) {
                console.log(error)
             }
  }
    
}