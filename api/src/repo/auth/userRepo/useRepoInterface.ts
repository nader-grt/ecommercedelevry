




export default abstract class userRepoInterface
{

    //    protected abstract FindAllCategories():Promise<void> ;
    //    protected abstract FindCategoryById(id:number):Promise<void> ;
       protected abstract registerUser(product:any):Promise<void> ;
       protected abstract  FindUserByEmail(email:string):Promise<any> ;
      //  static  IsExistProduct():Promise<void> ;

}