import { Employee, User } from "../../models/main";
import IEmployeeRepoInterface from "./IEmployeeRepoInterface";


export default class EmployeeRepo extends IEmployeeRepoInterface
{


    public async createEmployee(emp:any):Promise<any> 
    {

        try {
                
            await  Employee.create(emp)
         } catch (error) {
            console.log(error) ;
            
         }
    }

    public async getEmployeeById(id :number):Promise<any> 
    {
        

        try {
            
            const  user  =  await  User.findOne( { where: { id: id } } ) ;
             if(user)
             {
                return user ;
             }
             return null ;
        } catch (error) {
            
        }
          
    }
}