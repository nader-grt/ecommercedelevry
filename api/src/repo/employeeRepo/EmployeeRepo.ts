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
    public async updateEmployee(emp:any,empid:number):Promise<any> 
    {
        try {

           // console.log('ddata base updated ',empid)
            const  emp1  =  await  Employee.update(                {
              
                salary: emp.salary,
                hiredAt: emp.hiredAt,
                userId: emp.userId,
              },
              { where: { id: empid} }) ;

    
             
           
            return emp1 ;
        } catch (error) {
            
        }
    }

    public async getEmployeeById(id :number):Promise<any> 
    {
        

        try {
            
            const  emp  =  await  Employee.findOne( { where: { id: id } } ) ;
             if(emp)
             {
                return emp ;
             }
             return null ;
        } catch (error) {
            
        }
          
    }

     static async FindEmployeeById(id:number):Promise<any>
     {
     
        const  emp  =  await  Employee.findOne( { where: { id: id } } ) ;
    try {
        
        if(emp)
            {
               return emp ;
            }
            return null ;
    } catch (error) {
        
    }

     }

     public async deleteEmployee(id:number,userid?:number):Promise<any> 
     {

          try {
            const  emp  =  await  Employee.destroy( { where: { id: id } } ) ;
                                 await User.destroy({where :{id:userid}})
            console.log("empppppppppp",emp)
          } catch (error) {
            
          }

     }
}