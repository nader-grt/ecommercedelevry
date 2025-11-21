

export default abstract class productRepoInterface
{

       protected abstract FindAllProducts():Promise<void> ;
       protected abstract FindProductById(id:number):Promise<void> ;

}