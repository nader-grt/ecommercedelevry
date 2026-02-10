import { Request, Response } from "express"
import { BaseController } from "../../infra/BaseCOntroller"
import EmployeeRepo from "../../repo/employeeRepo/EmployeeRepo";
import { RequestAuth } from "../../middleware/verifyToken";
import DeleteEmployeeUseCase from "../../useCases/EmployeeUseCase/DeleteEmployeeUseCase";



export default class DeleteEmployeeController extends BaseController
{
    protected _employeeRepo:EmployeeRepo ;

    private usecase!:DeleteEmployeeUseCase
          constructor(deleteEmployeeUseCase:DeleteEmployeeUseCase)
          {
            super();
             this._employeeRepo = new EmployeeRepo() ;

             this.usecase = deleteEmployeeUseCase ;
          }


      public async executeImpl(req: RequestAuth, res: Response): Promise<any> {
          

        const {id}  = req.params;
        const empId = Number(id) ;
        let empFounded : any ;
              
        const userId = req.user?.id;
        empFounded =      await EmployeeRepo.FindEmployeeById(empId) ;
        try {
            
                  await this.usecase.execute(empId)
            if(empFounded)
            {
               await  this._employeeRepo.deleteEmployee(empId,userId) ;
            }

            return this.ok(res," employee deleted with success ")
        } catch (error) {
            
        }
      }

}