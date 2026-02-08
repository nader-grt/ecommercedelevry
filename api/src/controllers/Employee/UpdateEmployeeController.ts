import { Request, Response } from "express"
import { BaseController } from "../../infra/BaseCOntroller"
import { RequestAuth } from "../../middleware/verifyToken"
import EmployeeRepo from "../../repo/employeeRepo/EmployeeRepo"
import EmployeesDomain from "../../models/domain/EmployeeDomain/EmployeeDomain";
import { stringToDate } from "../../util/conversionDateString";



export default class UpdateEmployeeController extends BaseController
{
             protected _employeeRepo:EmployeeRepo ;
             protected _employeesDomain:EmployeesDomain;

             private updateEmployeeDomain(
                empupdate: any,
                userId: number
              ): EmployeesDomain {
              
                const employee = new EmployeesDomain();
              
                // employee.setSalary = empRequest.salary;
                // employee.sethiredAt = stringToDate(empRequest.hiredAt);
                // employee.setUserId = userId;
              
                return employee;
              }

       constructor()
       {
        super() 
        this._employeeRepo  = new EmployeeRepo()
         this._employeesDomain = new EmployeesDomain();
       }

      public async executeImpl(req: RequestAuth, res: Response): Promise<any> {
        const {salary ,hiredAt ,userIdRole} =
        req.body;
        const {id}  = req.params;
        const empId = Number(userIdRole) ;
        let employeeFounded: EmployeesDomain | null = null;
              


        const idsUserTypeRole :number[] = await EmployeeRepo.FindAllIdsExistWithEmp()  ;
        try {

            if(!idsUserTypeRole.includes(empId))
            {

              return this.notFound(res," employee   not fount can not not updated any thing ")  


            }
            employeeFounded  = await this._employeeRepo.getEmployeeById(Number(id)) ;
            if (!employeeFounded) {
              return this.notFound(res, "Employee not found");
            }
           
     
                if(salary)
                {
            
       
                    employeeFounded.setSalary = +salary ;
                }


                if(hiredAt)
                {

                  //  this._employeesDomain.sethiredAt =stringToDate(hiredAt) ;
                    employeeFounded.sethiredAt =  stringToDate(hiredAt) ;
                }

                if(empId)
                {
                 
                    employeeFounded.setUserId   = empId;
                }


              
              const  resultEmployeeUpdated =    await     this._employeeRepo.updateEmployee(employeeFounded,empId)
             if(resultEmployeeUpdated)
             {

          
               return this.resultValue(res," employee updated with success !",employeeFounded)
            }

        } catch (error) {
            console.log(error)
        }
      }

}