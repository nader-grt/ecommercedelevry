


export default abstract class productRepoInterface
{

       protected abstract FindAllProducts():Promise<void> ;
       protected abstract FindProductById(id:number):Promise<void> ;
       protected abstract createProduct(product:any):Promise<void> ;

      //  static  IsExistProduct():Promise<void> ;

}