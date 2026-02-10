import EmployeeRepo from "../../repo/employeeRepo/EmployeeRepo";




export default class DeleteEmployeeUseCase
{
               
   
    private usecaseRepo!:EmployeeRepo ;
    constructor(employeeRepo:EmployeeRepo)
    {
       this.usecaseRepo = employeeRepo ;
    }

    async execute(empId:number):Promise<any>
    {


     
                    try {


                     //   employee =        await EmployeeRepo.FindEmployeeById(empId) ;

                     const employee = await this.usecaseRepo.getEmployeeById(empId);
                     if (!employee) return {message:"Employee not found"};
                 
                     console.log("eeeeee usecase beforeeee   ",employee)
        
                       // await 
                    } catch (error) {
                        console.log(error)
                    }
    }

}