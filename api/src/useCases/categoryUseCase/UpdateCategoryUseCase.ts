import { ICategoryRequest } from "../../controllers/category/UpdateCategoryController";
import CategoryDomain from "../../models/domain/cetegoryDomain/CategoryDomaun";
import CategoryRepo from "../../repo/categoryRepo/categoryRepo";




export default class UpdateCategoryUseCase
{
    private _ReadCategoryUpdate(categoryRequest :ICategoryRequest)
           {
               const category = new CategoryDomain() ;

               category.setName = categoryRequest.name ;
               //categoryId

               category.setCategoryId = categoryRequest.categoryId
               return category ;

           }

        private usecaseRepo!:CategoryRepo ;
      constructor(categoryRepo:CategoryRepo)
      {
        this.usecaseRepo = categoryRepo ;
      }


      async execute(dto:ICategoryRequest):Promise<CategoryDomain | any>
      {

               try {
                
              //  console.log("  inside use after findddddd ",dto,"*********" ,dto.categoryId)
                const category = await CategoryRepo.FindCategoryById(dto.categoryId!);
            


                let resultCategory :any = this._ReadCategoryUpdate(dto)  ;
                if (!category) return null;
            

              
                await this.usecaseRepo.UpdateCategoryById(resultCategory);
            
                return category;
               } catch (error) {
                
                console.log(error)
               }

      }
}