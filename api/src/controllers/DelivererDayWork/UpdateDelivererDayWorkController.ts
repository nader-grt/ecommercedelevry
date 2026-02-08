import { Request, Response } from "express";
import { BaseController } from "../../infra/BaseCOntroller";
import DeleveryRepo from "../../repo/delevryRepo/DeleveryRepo";
import DeleveryWithDaysWorkDomain from "../../models/domain/DeleveryWithDaysWorkDomain/DeleveryWithDaysWorkDomain";
import DeleveryWithDaysWorkRepo from "../../repo/DeleveryWithDaysWorkRepo/DeleveryWithDaysWorkRepo";


export  default  class UpdateDelivererDayWorkController extends BaseController
{
      
           
  private _deleveryRepo:DeleveryRepo ;
  private  _deleveryWithDaysWorkDomain:DeleveryWithDaysWorkDomain;
  private _deleveryWithDaysWorkRepo:DeleveryWithDaysWorkRepo ;
   
    

    constructor()
    {
      super()
        this._deleveryRepo  = new DeleveryRepo();
       this._deleveryWithDaysWorkDomain  = new DeleveryWithDaysWorkDomain() ;
       this._deleveryWithDaysWorkRepo  =new DeleveryWithDaysWorkRepo() ;
    }
            protected async executeImpl(req: Request, res: Response): Promise<any> {
                const  {    nbrHours , dayWorkid   } = req.body ;
                const {delivererid} = req.params ;//delivererid
                 const id = Number(delivererid)
                 let delivery :any  = null;

                 console.log(" update day delivery **    ",{    nbrHours , dayWorkid   },"idd delivery  ",id)
                        
                   try {
                    
                    delivery =       await DeleveryRepo.FindDelevryById(id) ;

                   // console.log("delivery  here   ",delivery )

                    if(delivery ===  null)
                    {
                        return this.notFound(res,"delivery not exist yet ") ;
                    }

                   } catch (error) {
                    console.log(error)
                   }
            }
}