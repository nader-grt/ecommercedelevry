import { Request, Response } from "express"
import { BaseController } from "../../infra/BaseCOntroller"
import EmployeeRepo from "../../repo/employeeRepo/EmployeeRepo";
import { RequestAuth } from "../../middleware/verifyToken";



export default class GetEmployeeController extends BaseController
{

          protected _employeeRepo: EmployeeRepo ;
                  constructor()
                  {
                    super() ;
                    this._employeeRepo = new EmployeeRepo()
                  }

      public async executeImpl(req: RequestAuth, res: Response): Promise<any> {
          
        const {id} = req.params ;
        const empId = Number(id) ;
         let employee :any ;

               try {
                

               if(empId)
                {
                 employee = await this._employeeRepo.getEmployeeById(empId) ;
                }
                if(employee === null)
                {
                    return this.notFound(res,`this id ${empId} not found`);
                }

                return this.resultValue(res,"employe found",employee) ;

               } catch (error) {
                
               }
      }

}