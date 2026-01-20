


export default abstract class IDelevryRepo {

  public  abstract      createDelevry(delevry:any):Promise<any>;

  public  abstract      GetDelevryByID(id:number):Promise<any>;

  public  abstract      DeleteDelevryByID(id:number):Promise<any>;
  public  abstract     UpdateDelevryByID(id:number):Promise<any> ;
  public abstract getUserDelevredById(id: number): Promise<any> ;
}
