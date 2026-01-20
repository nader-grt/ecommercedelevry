


export default abstract class IEmployeeRepoInterface
{
    
    public abstract getEmployeeById(id :number):Promise<any> ;
    public abstract createEmployee(emp:any):Promise<any> ;

}