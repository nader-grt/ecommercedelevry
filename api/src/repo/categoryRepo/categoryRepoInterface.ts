




export default abstract class categoryRepoInterface
{

    //    protected abstract FindAllCategories():Promise<void> ;
     //  protected abstract FindCategoryById(id:number):Promise<void> ;
       protected abstract createCategory(category:any):Promise<void> ;
       protected abstract GetCategoryById(id:number):Promise<void> ;
       protected abstract UpdateCategoryById(category:any,id:number):Promise<void> ;
       protected abstract GetAllCategories():Promise<void> ;
       protected abstract DeleteCategoryById(id :number):Promise<void> ;

   

}