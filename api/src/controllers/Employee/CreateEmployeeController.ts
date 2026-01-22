import { Request, Response } from "express"
import { BaseController } from "../../infra/BaseCOntroller"
import EmployeesDomain from "../../models/domain/EmployeeDomain/EmployeeDomain";
import EmployeeRepo from "../../repo/employeeRepo/EmployeeRepo";
import { stringToDate } from "../../util/conversionDateString";
import { RequestAuth } from "../../middleware/verifyToken";
import UserRepo from "../../repo/auth/userRepo/registerUserRepo";


export default  interface IEmployeeRequest
{
    salary:number;
    hiredAt:string;
    userid:number ;


}

export default class CreateEmployeeController extends BaseController
{
        protected _EmployeesDomain:EmployeesDomain;
        protected _EmployeeRepo :EmployeeRepo
        protected  _UserRepoEmp :UserRepo ;

        private async _ReadEmployee(
           empRequest:IEmployeeRequest
          ): Promise<any> {
            
        
        
            return {
                salary: (this._EmployeesDomain.setSalary = empRequest.salary),
                hiredAt: (this._EmployeesDomain.sethiredAt = stringToDate(empRequest.hiredAt)),
                userid:empRequest.userid
            };
        

}


private createEmployeeDomain(
    empRequest: IEmployeeRequest,
    userId: number
  ): EmployeesDomain {
  
    const employee = new EmployeesDomain();
  
    employee.setSalary = empRequest.salary;
    employee.sethiredAt = stringToDate(empRequest.hiredAt);
    employee.setUserId = userId;
  
    return employee;
  }

  
       constructor()
       {
        super();
        this._EmployeesDomain = new EmployeesDomain();
        this._EmployeeRepo  = new EmployeeRepo() ;
        this._UserRepoEmp   = new UserRepo() ;
       }

      public async executeImpl(req: RequestAuth, res: Response): Promise<any> {
        const {salary ,hiredAt} =
        req.body;
        const userId = req.user?.id;

   

      const dtoEmp: any = {
        salary,
        hiredAt,
      
      };

      const emp = await this._ReadEmployee(dtoEmp);

       let   employeeDomain:any ;

     if(userId)
     {
         employeeDomain = this.createEmployeeDomain(
            emp,
            userId
          );
     }
       let   empUser :any ;
  

            try {
                
                if(userId)
                    {
                       empUser = await this._UserRepoEmp.getUserById(userId) ;
                    }
              
              
                
              
                    const resultEmp = await this._EmployeeRepo.createEmployee(employeeDomain.toPersistence()) ;

                    this.ok(res, { message: "employee created  successfully" });
            } catch (error) {
                
            }





      }

}