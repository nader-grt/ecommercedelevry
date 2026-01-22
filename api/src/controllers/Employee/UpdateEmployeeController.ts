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
        const {salary ,hiredAt} =
        req.body;
        const {id}  = req.params;
        const empId = Number(id) ;
        let employeeFounded :any ;
              
        const userId = req.user?.id;

//    const empDtoUptated:any = {

//    }
        try {
            if(empId)
                {
                   employeeFounded  = await EmployeeRepo.FindEmployeeById(empId) ;
                   console.log("employeeFounded ********** new \t ",employeeFounded)
                }

                if(salary)
                {
                    //  salary: (this._EmployeesDomain.setSalary = empRequest.salary),
              //  hiredAt: (this._EmployeesDomain.sethiredAt = stringToDate(empRequest.hiredAt)),
              //  userid:empRequest.userid
              this._employeesDomain.setSalary =Number(salary) ;
                    employeeFounded.salary = this._employeesDomain.getSalary  ;
                }

                // stringToDate(hiredAt)

                if(hiredAt)
                {

                    this._employeesDomain.sethiredAt =stringToDate(hiredAt) ;
                    employeeFounded.hiredAt =  this._employeesDomain.gethiredAt
                }

                if(userId)
                {
                 //   this._employeesDomain.setUserId = userId ;
                    employeeFounded.userId   = userId;
                }


                console.log(employeeFounded,"resultttttttttttttttttttttt")
             const  resultEmployeeUpdated =    await     this._employeeRepo.updateEmployee(employeeFounded,empId)
             if(resultEmployeeUpdated)
             {
               return this.ok(res," employee updated with success !")
            }

        } catch (error) {
            console.log(error)
        }
      }

}