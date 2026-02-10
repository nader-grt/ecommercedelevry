import { promises } from "dns";
import CategoryRepo from "../../repo/categoryRepo/categoryRepo";




export default class GetAllCategoriesUseCase
{


             private usecaseRepo!:CategoryRepo; 
         constructor(categoryRepo:CategoryRepo)
         {
              this.usecaseRepo = categoryRepo ;
         }


         async execute():Promise<any>
         {

              try {
                const categoriesName =      await this.usecaseRepo.GetAllCategories()  ;

                return categoriesName ;
              } catch (error) {
                
                  console.log(error)
              }
         }

}