


export default abstract class ISupplierRepo {




  public     abstract   createSupplier():Promise<any>;
 

  public     abstract   GetSupplierByID(id:number):Promise<any>;
 

  public  abstract      DeleteSupplierByID(id:number):Promise<any>


  public  abstract     UpdateSupplierByID(id:number):Promise<any> ;
}
