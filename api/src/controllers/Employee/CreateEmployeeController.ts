import { Request, Response } from "express"
import { BaseController } from "../../infra/BaseCOntroller"
import EmployeesDomain from "../../models/domain/EmployeeDomain/EmployeeDomain";
import EmployeeRepo from "../../repo/employeeRepo/EmployeeRepo";
import { stringToDate } from "../../util/conversionDateString";
import { RequestAuth } from "../../middleware/verifyToken";
import UserRepo from "../../repo/auth/userRepo/registerUserRepo";
import { Role } from "../../models/user";


export default  interface IEmployeeRequest
{
    salary:number;
    hiredAt:string;
    userIdRole:number ;


}

export default class CreateEmployeeController extends BaseController
{
            protected _EmployeesDomain:EmployeesDomain;
            protected _EmployeeRepo :EmployeeRepo
            protected  _UserRepoEmp :UserRepo ;



            constructor()
            {
            super();
            this._EmployeesDomain = new EmployeesDomain();
            this._EmployeeRepo  = new EmployeeRepo() ;
            this._UserRepoEmp   = new UserRepo() ;
            }
         
                private async _ReadEmployee(
                  empRequest:IEmployeeRequest
                  ): Promise<any> 
                  {
                        return {
                              salary: (this._EmployeesDomain.setSalary = empRequest.salary),
                              hiredAt: (this._EmployeesDomain.sethiredAt = stringToDate(empRequest.hiredAt)),
                              userid:empRequest.userIdRole
                          };
                    }


                private createEmployeeDomain(
                    empRequest: IEmployeeRequest,
                    userIdRole: number
                  ): EmployeesDomain {
                  
                        const employee = new EmployeesDomain();
                      
                        employee.setSalary = empRequest.salary;
                        employee.sethiredAt = stringToDate(empRequest.hiredAt);
                        employee.setUserId = userIdRole;
                      
                        return employee;
                  }

  


      public async executeImpl(req: RequestAuth, res: Response): Promise<any> {
                 const {salary ,hiredAt,userIdRole} = req.body;
    //    const userId = req.user?.id;

                  const typeRoleUser:any = req.user?.role ;


                const dtoEmp: any = {
                  salary,
                  hiredAt,
                  userIdRole
                };

                const emp = await this._ReadEmployee(dtoEmp);

                let   employeeDomain:any ;

            try {
                
                                 const existEmp =       await EmployeeRepo.FindEmployeeBefore(Number(userIdRole))

                                 if(existEmp)
                                 {
                                  return this.resultValue(res,`exist before this id ${userIdRole}`)
                                 }
                 //    type: Sequelize.ENUM('user', 'admin','supplier','deliverer','secrtrie'),
                             const idsUserTypeRole :number[] = await EmployeeRepo.FindAllIdsExistWithEmp()  ;
console.log("idsUserTypeRole **  " ,idsUserTypeRole)
                             if(idsUserTypeRole.length == 0)
                             {
                              return this.notFound(res," employee   not fount by any role ")  
                             }
                             const [ idDeliverer ,idSecrtrie] = idsUserTypeRole;

                 const resultUserDelevry : any =    await EmployeeRepo.getEmpUsersByRole("deliverer")  ;
                 const resultUserSecretary : any =    await EmployeeRepo.getEmpUsersByRole("secrtrie")
             //    const resultUsersupplier : any =    await EmployeeRepo.getEmpUsersByRole("supplier")
           
           
    
                
                     
                 
                    if(idDeliverer === userIdRole)
                      {
                        employeeDomain = this.createEmployeeDomain(
                          emp,
                          resultUserDelevry[0].DelivererId
                        );


                        const resultEmp = await this._EmployeeRepo.createEmployee(employeeDomain.toPersistence(),Number( resultUserDelevry[0].DelivererId)) ;
                      }


                      if(idSecrtrie ===  userIdRole)
                       {
                        employeeDomain = this.createEmployeeDomain(
                          emp,
                          resultUserSecretary[0].SecrtrieId
                        );

                        const resultEmp = await this._EmployeeRepo.createEmployee(employeeDomain.toPersistence(),Number(resultUserSecretary[0].SecrtrieId)) ;
                        }
                      
   

                    this.ok(res, { message: "employee created  successfully" });
            } catch (error) {
                
            }





      }

}