


export default abstract class IEmployeeRepoInterface
{
    
    public abstract getEmployeeById(id :number):Promise<any> ;
    public abstract createEmployee(emp:any,userid:number):Promise<any> ;
    public abstract updateEmployee(emp:any,userid:number):Promise<any> ;
    public abstract deleteEmployee(id:number):Promise<any> ;

}