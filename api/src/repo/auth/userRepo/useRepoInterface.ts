




export default abstract class userRepoInterface
{

    //    protected abstract FindAllCategories():Promise<void> ;
    //    protected abstract FindCategoryById(id:number):Promise<void> ;
       protected abstract registerUser(product:any):Promise<void> ;
       protected abstract  FindUserByEmail(email:string):Promise<any> ;
       protected abstract  getUserById(id:number):Promise<any> ;
      //  static  IsExistProduct():Promise<void> ;
    //  protected abstract IsExistUser(email:string):Promise<any>;

}